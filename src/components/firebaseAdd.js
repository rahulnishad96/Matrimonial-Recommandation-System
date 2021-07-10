export async function FirebaseAdd(fullDeitailsValue)
  {
    const response =await fetch("https://matrimonial-system-default-rtdb.firebaseio.com//user.json",{
      method:"POST",
      body:JSON.stringify(fullDeitailsValue),
      headers:{
        "content-Type":"application/json"
      }
    });
   const data=await response.json();
    console.log(data);
  }