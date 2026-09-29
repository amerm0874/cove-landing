// This route deliberately bypasses site analytics: gift tokens are bearer credentials.
const upstream='https://vqvkozlypmvfzvptihyo.supabase.co/functions/v1/winback-gift';
export async function giftRoute(request:Request):Promise<Response|null>{
 const url=new URL(request.url);if(url.pathname!=='/gift')return null;
 const headers={'Content-Type':'text/html; charset=utf-8','Cache-Control':'private, no-store','Referrer-Policy':'no-referrer','X-Robots-Tag':'noindex, nofollow','X-Content-Type-Options':'nosniff','Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'"};
 if(!['GET','POST'].includes(request.method))return new Response('Method not allowed',{status:405,headers});
 if(request.method==='POST' && request.headers.get('origin') && request.headers.get('origin')!==url.origin)return new Response('Please open the link in your email.',{status:403,headers});
 const target=new URL(upstream);const token=url.searchParams.get('token');if(token)target.searchParams.set('token',token);
 const body=request.method==='POST'?await request.text():undefined;
 if(body && body.length>4096)return new Response('Request too large',{status:413,headers});
 try{
  const response=await fetch(target,{method:request.method,headers:{'Content-Type':'application/x-www-form-urlencoded'},body,redirect:'error',signal:AbortSignal.timeout(45000)});
  return new Response(await response.text(),{status:response.status,headers});
 }catch{return new Response('<!doctype html><html lang="en"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cove gift</title><body><h1>Please try again shortly</h1><p>Your gift has not been restarted. Open the same link again in two minutes.</p></body></html>',{status:503,headers});}
}
