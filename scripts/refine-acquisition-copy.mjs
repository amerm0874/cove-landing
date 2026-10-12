import fs from 'node:fs';
import ts from 'typescript';

const copy = {
 en: ['Keep your medication schedule, appointments and cycle notes together. Photograph your clinic sheet, review the draft, and confirm the details before saving.', 'When your clinic changes the plan, update your schedule.', 'Available on iPhone and Android. Features and notification behaviour can differ by platform and version; check your store listing.', 'From App Store reviewers', 'Less to keep in your head.', 'Describes less organisational burden from keeping tracking tasks together.', 'Values keeping medication, appointments and cycle expenses in one app.', 'Summaries of two public Australian App Store reviews, checked 12 October 2026. Individual experiences, not clinical evidence. Read the originals below.'],
 ar: ['اجمعي جدول الأدوية والمواعيد وملاحظات الدورة في مكان واحد. صوّري ورقة العيادة، وراجعي المسودة وأكّدي التفاصيل قبل الحفظ.', 'عندما تغيّر العيادة الخطة، حدّثي جدولك.', 'متاح على iPhone وAndroid. قد تختلف الميزات وطريقة التنبيهات حسب المنصة والإصدار؛ راجعي صفحة متجرك.', 'من مراجعات App Store', 'تفاصيل أقل تحملينها في ذهنك.', 'تصف تخفيف عبء التنظيم عند جمع مهام المتابعة في مكان واحد.', 'تقدّر جمع الأدوية والمواعيد ومصاريف الدورة في تطبيق واحد.', 'ملخّصا مراجعتين عامّتين من متجر Apple الأسترالي، تمّت مراجعتهما في 12 أكتوبر 2026. تجارب فردية وليست دليلًا طبيًا. اقرئي النصّين الأصليين أدناه.'],
 de: ['Medikamentenplan, Termine und Zyklusnotizen an einem Ort. Fotografiere dein Klinikblatt, prüfe den Entwurf und bestätige die Angaben vor dem Speichern.', 'Wenn deine Klinik den Plan ändert, aktualisiere deinen Zeitplan.', 'Für iPhone und Android verfügbar. Funktionen und Mitteilungen können je nach Plattform und Version abweichen; prüfe deinen Store-Eintrag.', 'Aus App-Store-Bewertungen', 'Weniger im Kopf behalten.', 'Beschreibt weniger Organisationsaufwand, wenn die Aufgaben an einem Ort zusammenkommen.', 'Schätzt Medikamente, Termine und Zykluskosten in einer App.', 'Zusammenfassungen zweier öffentlicher Bewertungen im australischen App Store, geprüft am 12. Oktober 2026. Individuelle Erfahrungen, keine klinischen Belege. Originale unten verlinkt.'],
 fr: ['Réunissez médicaments, rendez-vous et notes de cycle. Photographiez la feuille de votre clinique, vérifiez le brouillon et confirmez les détails avant de sauvegarder.', 'Quand votre clinique modifie le plan, mettez votre calendrier à jour.', 'Disponible sur iPhone et Android. Les fonctions et notifications peuvent varier selon la plateforme et la version ; consultez votre fiche boutique.', 'Des avis sur l’App Store', 'Moins de détails à garder en tête.', 'Décrit une charge d’organisation réduite en réunissant les tâches de suivi.', 'Apprécie de réunir médicaments, rendez-vous et dépenses du cycle dans une application.', 'Résumés de deux avis publics de l’App Store australien, consultés le 12 octobre 2026. Expériences individuelles, pas des preuves cliniques. Originaux accessibles ci-dessous.'],
 es: ['Reúne el calendario de medicación, las citas y las notas del ciclo. Fotografía la hoja de tu clínica, revisa el borrador y confirma los detalles antes de guardar.', 'Cuando tu clínica cambie el plan, actualiza tu calendario.', 'Disponible para iPhone y Android. Las funciones y notificaciones pueden variar según la plataforma y la versión; consulta tu tienda.', 'Opiniones del App Store', 'Menos detalles que recordar.', 'Describe una menor carga de organización al reunir las tareas de seguimiento.', 'Valora reunir medicación, citas y gastos del ciclo en una aplicación.', 'Resúmenes de dos opiniones públicas del App Store australiano, consultadas el 12 de octubre de 2026. Experiencias individuales, no pruebas clínicas. Originales enlazados abajo.'],
};
for (const [locale, c] of Object.entries(copy)) {
 const file = `src/i18n/dictionaries/${locale}.ts`;
 let text = fs.readFileSync(file, 'utf8');
 const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
 let root;
 function visit(n) { if (ts.isVariableDeclaration(n) && n.name.getText(ast) === locale) root = n.initializer; ts.forEachChild(n, visit); }
 visit(ast);
 while (root && !ts.isObjectLiteralExpression(root)) root = root.expression;
 const changes = {'home.hero.body':c[0], 'chapters.verification.headline':c[1], 'features.categories.privacy.items.3.body':c[2],
 'chapters.community.eyebrow':c[3], 'chapters.community.heading':c[4], 'chapters.community.voices':[c[5], c[6]], 'chapters.community.note':c[7]};
 const edits = Object.entries(changes).map(([path,value])=>{
  let n=root;
  for(const key of path.split('.')) { n=ts.isArrayLiteralExpression(n)?n.elements[Number(key)]:n.properties.find(p=>p.name?.getText(ast).replace(/['"]/g,'')===key)?.initializer; if(!n) throw Error(`${file}: missing ${path}`); }
  return {start:n.getStart(ast),end:n.end,value:JSON.stringify(value)};
 });
 for(const e of edits.sort((a,b)=>b.start-a.start)) text=text.slice(0,e.start)+e.value+text.slice(e.end);
 fs.writeFileSync(file,text);
}
