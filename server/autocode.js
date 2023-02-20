 const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
  
  
  let user = "Valerie";
  let response_id = "bgb7w201cx0dowrqc9nv5bgb7w20aq0u";
  
  //get type form data for all other users
  let other_users_data = await lib.http.request['@1.1.7'].get({
    url: `https://api.typeform.com/forms/i7hFvACI/responses`,
    headers: {
      'authorization': `Bearer tfp_3GuQQNTJ3ego3sDghSsNFbivuWtPHcEzVkow1aMnuory_3mJ6nPpRx19d9v`
    },
    queryParams:{
      'excluded_response_ids': response_id
    }
  });
  //store interests into an array
  let other_interests = [];
  other_users_data.data.items[0].answers.forEach(function (arrayItem) {
    let x = arrayItem.text;
    other_interests.push(x);
  
  });
  other_interests.splice(2,1); //delete third question reply 
  other_interests.splice(0,1) //delete name
  
  //get type form data for current user
  let current_user_data = await lib.http.request['@1.1.7'].get({
    url: `https://api.typeform.com/forms/i7hFvACI/responses`,
    headers: {
      'authorization': `Bearer tfp_3GuQQNTJ3ego3sDghSsNFbivuWtPHcEzVkow1aMnuory_3mJ6nPpRx19d9v`
    },
    queryParams:{
      'included_response_ids': response_id
    }
  });
  
  // store interests into an array
  let current_user_interests = [];
  current_user_data.data.items[0].answers.forEach(function (arrayItem) {
    let x = arrayItem.text;
    current_user_interests.push(x);
  
  });
  current_user_interests.splice(2,1); //delete third question reply 
  current_user_interests.splice(0,1) //delete name
   
   let interest_obj = {
     current_user_interests: current_user_interests,
     other_interests: other_interests,
   }
   console.log(interest_obj);
 
  
  
  let currList = interest_obj.current_user_interests;
  let otherList = interest_obj.other_interests;
  
  let currList_string = currList.join(" ,")
  let otherList_string = otherList.join(" ,")
  let prompt = [
    `You are a matching algorithm to help people find common interests.`,
    `Please reply with a list of topics that are included in both the first and second list. The first list is: 
     ${currList_string}. 
     The second list is:
     ${otherList_string}.`,
    `List all the matching items found.`
  ].join("\n")

  let answer = await lib.openai.playground['@0.0.4'].completions.create({
    model: `text-davinci-003`,
    prompt: [
     ` ${prompt}`
    ],
    max_tokens: 512,
    temperature: 0.5,
    top_p: 1,
    n: 1,
    echo: false,
    presence_penalty: 0,
    frequency_penalty: 0,
    best_of: 1
  });
 
console.log(current_user_interests);
console.log(other_interests);

return answer
