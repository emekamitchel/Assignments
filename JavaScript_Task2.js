let data = 
        [
            {
                principal: 2500,
                time: 1.8
            },
            {
                principal: 1000,
                time: 5
            },
            {
                principal: 3000,
                time: 1
            },
            {
                principal: 2000,
                time: 3
            }
        ]    
        function interestCalculator() {
            for (let i of data) {   
                if (i.principal>=2500 && i.time>1 && i.time<3){
                   return "rate = 3"
                } 
                else if (i.principal>=2500 && i.time>=3){    
                   return "rate = 4"
                } 
                else if (i.principal<2500 && i.time<=1 ){    
                    return "rate = 2"
                } 
        
                return "rate = 1"            
            }
        }
        