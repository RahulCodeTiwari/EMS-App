const employees =  [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "143",
        "tasks": [
          {
            "title": "Fix Database Issues",
            "description": "Resolve errors in the database queries.",
            "date": "2024-11-22",
            "category": "Database",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Update Website Content",
            "description": "Revise the About Us page content.",
            "date": "2024-11-21",
            "category": "Web Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Prepare Monthly Report",
            "description": "Compile performance metrics for October.",
            "date": "2024-11-20",
            "category": "Reporting",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "143",
        "tasks": [
          {
            "title": "Develop New API",
            "description": "Create an API for the mobile app.",
            "date": "2024-11-22",
            "category": "API Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Team Meeting",
            "description": "Discuss project timelines with the team.",
            "date": "2024-11-19",
            "category": "Management",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Bug Fixes",
            "description": "Resolve critical bugs in the system.",
            "date": "2024-11-20",
            "category": "Debugging",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "143",
        "tasks": [
          {
            "title": "Optimize Database Queries",
            "description": "Improve query performance.",
            "date": "2024-11-22",
            "category": "Database",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Client Presentation",
            "description": "Prepare and deliver a pitch to a new client.",
            "date": "2024-11-18",
            "category": "Client Management",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "143",
        "tasks": [
          {
            "title": "Code Review",
            "description": "Review code submissions from junior developers.",
            "date": "2024-11-21",
            "category": "Code Review",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "System Update",
            "description": "Deploy the latest updates to the production environment.",
            "date": "2024-11-20",
            "category": "Deployment",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          },
          {
            "title": "Prepare Training Material",
            "description": "Create resources for onboarding new hires.",
            "date": "2024-11-22",
            "category": "Training",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "143",
        "tasks": [
          {
            "title": "Conduct Market Research",
            "description": "Analyze competitors in the tech space.",
            "date": "2024-11-19",
            "category": "Research",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Design Mockups",
            "description": "Create UI designs for the new feature.",
            "date": "2024-11-22",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Fix Server Issues",
            "description": "Address latency issues on the server.",
            "date": "2024-11-20",
            "category": "Server Maintenance",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      }
    ];
    
    const admin = [{
          "id": 1,
          "email": "admin@example.com",
          "password": "431"
        }]
      
      

  export const setLocalStorage = ()=> {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees, admin)
   
  }
  
  