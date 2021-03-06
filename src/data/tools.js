const tools = [
    {
        id: 1,
        name: 'Department of Computer science and engineering (CSE)',
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/42fd3825815139.5634b2e60ab82.png',
        educationLevel: 'BSc' 
    },
    {    
        id: 2,
        name: 'Faculty of Science & Engineering',
        img: 'https://www.feniuniversity.edu.bd/img/frontend/programme/faculty-of-science-engineering-95371-2.jpg',
        educationLevel: 'BSc' 
    },
    {
        id: 3,
        name: 'Department of Civil engineering (CE)',
        img: 'https://i1.wp.com/learnengineering.in/wp-content/uploads/2020/04/CIVIL-LOGO.jpg?fit=300%2C300&ssl=1',
        educationLevel: 'BSc' 
    },
    {
        id: 4,
        name: 'Department of Industrial and production engineering (IPE)',
        img: 'https://tecn.gov.bd/assets/images/dept/20190924_054134_industrial__production_engineerning.jpg',
        educationLevel: 'BSc' 
    },
    {
        id: 5,
        name: 'Bachelor of Business Administration',
        img: 'https://www.buildingboards.co.uk/wp-content/uploads/2019/12/BBA-logo-for-news-item-on-website.jpg',
        educationLevel: 'BBA' 
    },
    {
        id: 6,
        name: 'Department of Textile Engineering (TE)',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/BTEC_Logo_by_Abdullah_.jpg/1200px-BTEC_Logo_by_Abdullah_.jpg',
        educationLevel: 'BSc' 
    },
    {
        id: 7,
        name: 'Faculty of Business Administration & Industrial Management',
        img: 'https://www.upei.ca/sites/default/files/styles/mobile_header/public/117-17N-0337-M-M.jpg?itok=x2TkTne4',
        educationLevel: 'BBA' 
    },
    { 
        id: 8,
        name: 'Bachelor of Tourism and Hospitality Management (BTHM)',
        img: 'https://www.buildingboards.co.uk/wp-content/uploads/2019/12/BBA-logo-for-news-item-on-website.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82mg68jXWC5m0UPG8YYCEEmQFM93ApeFY8nwOwKKp3935gIiHVR2P4QLounNULohwQKg&usqp=CAU',
        educationLevel: 'BSc' 
    },
    {
        id: 9,
        name: 'Master of Business Administration (MBA) (Executive)',
        img: 'https://lh3.googleusercontent.com/proxy/DxXoYHZJPMVsIbuxB7pa9tV-t1FFc4w9RZ5OdTPvjEACqThNYyfRhIWZZoyOe9vRCBKit9GH4BDUmF4EPchLHd09SDCczehm2uBGHM9ecK9naVizGy4U50iTnfx3aS-Zs11EjErzzm0',
        educationLevel: 'MBA' 
    },
    {
        id: 10,
        name: 'Faculty of Arts and Social Science',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtA5HoNj6PwoWycza8663ag8RzkRbi5ycpNg&usqp=CAU',
        educationLevel: 'Arts' 
    },
    {
        id: 11,
        name: 'BSS Hons in Economics',
        img: 'https://images.static-collegedunia.com/public/image/ed9e66b2b592362b60709a45ded1666a.jpeg?tr=w-700,h-500,c-force',
        educationLevel: 'BSS' 
    },
    {
        id: 12,
        name: 'MSS in Economics',
        img: 'https://www.adelaide.edu.au/learning/sites/default/files/styles/ua_image/public/media/images/2021-04/UoAEmployabillityInfographic.jpg?itok=QtXrtWs1',
        educationLevel: 'MSS' 
    },
    {
        id: 13,
        name: 'Bachelor of Arts in English(Hons)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnQvpwSO4ocsKW2ffSBTrNbZZvZSoa7f9e_QUjKBOn_nxB0sNuFgeMmQhasNWh783ki4&usqp=CAU',
        educationLevel: 'Arts' 
    },
    {
        id: 14,
        name: 'MA in English (Preli & Final)',
        img: 'https://kolorob.com.bd/wp-content/uploads/2020/09/Masters-Final-Year-Routine-1200x900.jpg',
        educationLevel: 'MA' 
    },
    {
        id: 15,
        name: 'Master of Business Administration ',
        img: 'https://media.istockphoto.com/photos/with-woman-using-a-tablet-picture-id1208892212?s=170667a',
        educationLevel: 'MBA' 
    },
    {
        id: 16,
        name: 'MSS in Governance and Development Studies',
        img: 'https://media.istockphoto.com/vectors/icon-vector-id1082644540?k=20&m=1082644540&s=612x612&w=0&h=HtntavEbGQRiv27jROUEKemPPfra2F5OR4I_fYH1aNs=',
        educationLevel: 'MSS' 
    },
    {
        id: 17,
        name: 'Master of Business Administration ',
        img: 'https://media.istockphoto.com/photos/with-woman-using-a-tablet-picture-id1208892212?s=170667a',
        educationLevel: 'MBA' 
    },
    {
        id: 18,
        name: 'Bachelor of Laws (2Yrs LLB)',
        img: 'https://i.pinimg.com/originals/3b/8c/fe/3b8cfe51d80fda419b6051b9d5593683.png',
        educationLevel: 'LLB' 
    },
    {
        id: 19,
        name: 'Bachelor of Laws (4Yrs LLB)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnyZSBfNKbzrR4Usd_cY3Eh-k05aHIzBUMHw56DXXsH6m9D4gnbH5wCs9kzClGjTWdO8&usqp=CAU',
        educationLevel: 'LLB' 
    },
    {
        id: 20,
        name: 'Master of Laws (1 & 2 Yrs LLM)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6AjjMbbg29T9GGcIr76cR0imT8CUWAwMifo7fmU-ki5YtoLiXidQAAdEKcHXj5a9y_Q&usqp=CAU',
        educationLevel: 'LLM' 
    },
]