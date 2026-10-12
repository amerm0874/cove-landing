import fs from 'node:fs';
import ts from 'typescript';

// One-off, fail-closed repair: AST paths preserve unrelated translations and formatting.
const copy = {
  en: {
    reminder: 'A countdown for your trigger shot.',
    reminderBody: 'See the countdown and confirm when you have taken the shot. Delivery depends on notification permissions and device settings; always set a separate backup alarm. You can hide medication names in Settings → Notifications.',
    privacy: 'You can hide medication names on lock-screen reminders in Settings → Notifications. Detailed reminders are enabled by default.',
    measurement: 'Cove has no in-app ads. AppsFlyer measures device and campaign activity; it does not receive your medications, lab results or journal. See our privacy policy for your choices.',
    price: 'Cove offers auto-renewing subscriptions. The app shows your local price, billing period, included features and any eligible trial before you subscribe. Offers vary by store and eligibility; check the purchase screen for the total charged and renewal terms.',
    scan: 'Photograph your clinic sheet, then review the draft.',
    scanBody: 'Cove reads a protocol photo into draft entries. Compare each medication, dose, unit, date and time with your clinic’s instructions, correct any mistakes, and confirm before saving. The scanner does not prescribe or verify a treatment.',
    alert: 'A countdown and reminders for your scheduled trigger shot. Android can show a full-screen alarm where permitted; iOS uses notifications and does not bypass silent mode. Set a separate backup alarm.',
    alertIntro: 'Keep the time your clinic gave you visible. Notifications depend on your phone settings and permissions; use an independent backup alarm.',
  },
  ar: {
    reminder: 'عدّ تنازلي لموعد الإبرة التفجيرية.',
    reminderBody: 'تابعي العدّ التنازلي وأكّدي أخذ الإبرة. وصول التنبيه يعتمد على الأذونات وإعدادات الهاتف؛ اضبطي دائمًا منبّهًا احتياطيًا مستقلًا. يمكنك إخفاء أسماء الأدوية من الإعدادات ← الإشعارات.',
    privacy: 'يمكنك إخفاء أسماء الأدوية من تذكيرات شاشة القفل في الإعدادات ← الإشعارات. التذكيرات المفصّلة مفعّلة افتراضيًا.',
    measurement: 'لا يعرض Cove إعلانات داخله. تقيس AppsFlyer نشاط الجهاز والحملات، ولا تتلقى أدويتك أو نتائج تحاليلك أو يومياتك. راجعي سياسة الخصوصية لمعرفة خياراتك.',
    price: 'يقدّم Cove اشتراكات تتجدّد تلقائيًا. يعرض التطبيق السعر بعملتك وفترة الفوترة والميزات وأي تجربة مؤهّلة قبل الاشتراك. تختلف العروض حسب المتجر والأهلية؛ راجعي إجمالي المبلغ وشروط التجديد في شاشة الشراء.',
    scan: 'صوّري ورقة العيادة، ثم راجعي المسودة.',
    scanBody: 'يحوّل Cove صورة البروتوكول إلى مسودات. قارني كل دواء وجرعة ووحدة وتاريخ ووقت بتعليمات عيادتك، وصحّحي الأخطاء وأكّدي قبل الحفظ. الماسح لا يصف علاجًا ولا يتحقّق من صحته الطبية.',
    alert: 'عدّ تنازلي وتذكيرات لموعد الإبرة الذي حدّدته عيادتك. يمكن أن يعرض Android منبّهًا بملء الشاشة عند السماح بذلك؛ يستخدم iOS الإشعارات ولا يتجاوز الوضع الصامت. اضبطي منبّهًا احتياطيًا مستقلًا.',
    alertIntro: 'احتفظي بالموعد الذي حدّدته عيادتك أمامك. تعتمد الإشعارات على إعدادات الهاتف وأذوناته؛ استخدمي منبّهًا احتياطيًا مستقلًا.',
  },
  fr: {
    reminder: 'Un compte à rebours pour votre injection de déclenchement.',
    reminderBody: 'Consultez le compte à rebours et confirmez la prise. La réception dépend des autorisations et des réglages du téléphone ; prévoyez toujours une alarme de secours indépendante. Masquez les noms dans Réglages → Notifications si vous le souhaitez.',
    privacy: 'Vous pouvez masquer les noms des médicaments sur l’écran verrouillé dans Réglages → Notifications. Les rappels détaillés sont activés par défaut.',
    measurement: 'Cove ne diffuse pas de publicités dans l’application. AppsFlyer mesure les données d’appareil et de campagne, sans recevoir vos médicaments, résultats de laboratoire ou journal. Consultez notre politique de confidentialité.',
    price: 'Cove propose des abonnements à renouvellement automatique. Le prix local, la période de facturation, les fonctionnalités et tout essai éligible sont affichés avant l’achat. Les offres varient selon le magasin et votre éligibilité ; vérifiez le montant total et les conditions de renouvellement.',
    scan: 'Photographiez la feuille de votre clinique, puis vérifiez le brouillon.',
    scanBody: 'Cove transforme la photo du protocole en brouillons. Comparez chaque médicament, dose, unité, date et heure aux instructions de votre clinique, corrigez les erreurs et confirmez avant d’enregistrer. Le scanner ne prescrit ni ne valide un traitement.',
    alert: 'Un compte à rebours et des rappels pour l’heure prescrite. Android peut afficher une alarme plein écran si les autorisations le permettent ; iOS utilise des notifications sans contourner le mode silencieux. Prévoyez une alarme de secours indépendante.',
    alertIntro: 'Gardez l’heure indiquée par votre clinique visible. Les notifications dépendent des réglages et autorisations du téléphone ; prévoyez une alarme indépendante.',
  },
  de: {
    reminder: 'Ein Countdown für deine Auslösespritze.',
    reminderBody: 'Sieh den Countdown und bestätige die Einnahme. Die Zustellung hängt von Berechtigungen und Geräteeinstellungen ab; stelle immer einen separaten Ersatzwecker. Medikamentennamen kannst du unter Einstellungen → Mitteilungen verbergen.',
    privacy: 'Unter Einstellungen → Mitteilungen kannst du Medikamentennamen auf dem Sperrbildschirm verbergen. Detaillierte Erinnerungen sind standardmäßig aktiviert.',
    measurement: 'Cove zeigt keine In-App-Werbung. AppsFlyer misst Geräte- und Kampagnenaktivität, erhält aber keine Medikamente, Laborwerte oder Tagebucheinträge. Deine Wahlmöglichkeiten stehen in der Datenschutzerklärung.',
    price: 'Cove bietet automatisch verlängerbare Abonnements. Lokaler Preis, Abrechnungszeitraum, Funktionen und ein gegebenenfalls verfügbares Probeangebot werden vor dem Kauf angezeigt. Angebote hängen vom Store und der Berechtigung ab; prüfe Gesamtbetrag und Verlängerungsbedingungen.',
    scan: 'Fotografiere dein Klinikblatt und prüfe den Entwurf.',
    scanBody: 'Cove erstellt Entwürfe aus dem Protokollfoto. Vergleiche Medikament, Dosis, Einheit, Datum und Uhrzeit mit den Anweisungen deiner Klinik, korrigiere Fehler und bestätige vor dem Speichern. Der Scanner verschreibt und überprüft keine Behandlung medizinisch.',
    alert: 'Ein Countdown und Erinnerungen für die vorgegebene Uhrzeit. Android kann bei entsprechender Berechtigung einen Vollbildalarm anzeigen; iOS verwendet Mitteilungen und umgeht den Lautlosmodus nicht. Stelle einen unabhängigen Ersatzwecker.',
    alertIntro: 'Behalte die von deiner Klinik genannte Uhrzeit im Blick. Mitteilungen hängen von Geräteeinstellungen und Berechtigungen ab; nutze einen unabhängigen Ersatzwecker.',
  },
  es: {
    reminder: 'Una cuenta atrás para tu inyección desencadenante.',
    reminderBody: 'Consulta la cuenta atrás y confirma la toma. La entrega depende de los permisos y ajustes del teléfono; configura siempre una alarma de respaldo independiente. Puedes ocultar los nombres en Ajustes → Notificaciones.',
    privacy: 'Puedes ocultar los nombres de los medicamentos en la pantalla de bloqueo desde Ajustes → Notificaciones. Los recordatorios detallados están activados por defecto.',
    measurement: 'Cove no muestra anuncios dentro de la aplicación. AppsFlyer mide actividad del dispositivo y de campañas, sin recibir tus medicamentos, análisis o diario. Consulta las opciones en nuestra política de privacidad.',
    price: 'Cove ofrece suscripciones con renovación automática. Antes de comprar se muestran el precio local, el periodo de facturación, las funciones y cualquier prueba disponible. Las ofertas dependen de la tienda y de tu elegibilidad; comprueba el importe total y las condiciones de renovación.',
    scan: 'Fotografía la hoja de tu clínica y revisa el borrador.',
    scanBody: 'Cove convierte la foto del protocolo en borradores. Compara cada medicamento, dosis, unidad, fecha y hora con las instrucciones de tu clínica, corrige los errores y confirma antes de guardar. El escáner no prescribe ni valida un tratamiento.',
    alert: 'Una cuenta atrás y recordatorios para la hora indicada. Android puede mostrar una alarma a pantalla completa si los permisos lo permiten; iOS usa notificaciones y no anula el modo silencioso. Configura una alarma de respaldo independiente.',
    alertIntro: 'Mantén visible la hora que indicó tu clínica. Las notificaciones dependen de los ajustes y permisos del teléfono; utiliza una alarma independiente de respaldo.',
  },
};

for (const [locale, c] of Object.entries(copy)) {
  const file = `src/i18n/dictionaries/${locale}.ts`;
  let text = fs.readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
  let root;
  function visit(n) {
    if (ts.isVariableDeclaration(n) && n.name.getText(ast) === locale) root = n.initializer;
    ts.forEachChild(n, visit);
  }
  visit(ast);
  while (root && !ts.isObjectLiteralExpression(root)) root = root.expression;
  const changes = {
    'home.privacy.items.2.body': c.measurement,
    'home.privacy.items.4.body': c.privacy,
    'chapters.trigger.headline': c.reminder,
    'chapters.trigger.body': c.reminderBody,
    'chapters.scanner.headline': c.scan,
    'chapters.scanner.body': c.scanBody,
    'features.categories.trigger.intro': c.alertIntro,
    'features.categories.trigger.items.0.body': c.alert,
    'faqPage.items.4.a': c.price,
  };
  const edits = Object.entries(changes).map(([path, value]) => {
    let node = root;
    for (const key of path.split('.')) {
      node = ts.isArrayLiteralExpression(node) ? node.elements[Number(key)] : node.properties.find(p => p.name?.getText(ast).replace(/['"]/g, '') === key)?.initializer;
      if (!node) throw new Error(`${file}: missing ${path}`);
    }
    if (!ts.isStringLiteral(node)) throw new Error(`${file}: not a string: ${path}`);
    return {start: node.getStart(ast), end: node.end, value: JSON.stringify(value)};
  });
  for (const e of edits.sort((a,b) => b.start-a.start)) text = text.slice(0,e.start)+e.value+text.slice(e.end);
  fs.writeFileSync(file,text);
  console.log(`${locale}: ${edits.length} copy corrections`);
}
