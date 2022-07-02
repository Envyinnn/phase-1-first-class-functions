function receivesAFunction(hello){
   hello();
   console.log('hi');
}

const returnsANamedFunction = () => {
   function sky() {

   }
   return sky;
}


const returnsAnAnonymousFunction = () => {
   return () => {};
}