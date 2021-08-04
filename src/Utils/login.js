export const login = async () => {
    return {
        "user": {
            "success": true,
            "token": "123123123123",
            "user": {
                "username": "email@email.test"
            },
            "profiles": [
                { 
                    "id": 1, 
                    "name": "Herr Max Mustermann"
                },
                {
                    "id":2, 
                    "name": "Frau Mina Musterfrau"
                }
            ]
        } 
    };
  };