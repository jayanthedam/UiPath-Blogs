let allDetails=[
    {
        "role": "Mentor:",
        "class": "mentor",
        "members": [
            {
                "name": "Krishnanand S H",
                "Id": "https://www.linkedin.com/in/krishnanandsh/",
                "pic": "./Images/Krishnanand S H.png"
            }
        ]
    },
    {
        "role": "Student Champions:",
        "class": "champ",
        "members": [
            {
                "name": "P Praneetha",
                "Id": "https://www.linkedin.com/in/praneetha-potharaju/",
                "pic": "./Images/Praneetha.png",
                "year": "2023-2024"
            },
            {
                "name": "Aarthi Mupparthy",
                "Id": "https://www.linkedin.com/in/m-aarthi/",
                "pic": "./Images/Aarthi Mupparthy.jpg",
                "year": "2022-2023"
            }
        ]
    },
    {
        "role": "Co-Organizers:",
        "class": "org",
        "members": [
            {
                "name": "S Ronak Jain",
                "Id": "https://www.linkedin.com/in/sancheti-ronak-jain-60a42222b/",
                "pic": "./Images/S Ronak-Jain.png"
            },
            {
                "name": "E Jayanth",
                "Id": "https://www.linkedin.com/in/jayanth-edam/",
                "pic": "./Images/E Jayanth.jpg"
            }
        ]
    },
    {
        "role": "Core Team Members:",
        "class": "core",
        "members": [
            {
                "name": "Tarun",
                "Id": "https://www.linkedin.com/in/tarun26/",
                "pic": "./Images/Tarun.jpg"
            },
            {
                "name": "Varun",
                "Id": "https://www.linkedin.com/in/varun-manchikanti/",
                "pic": "./Images/Varun.png"
            },
            {
                "name": "Jayanth",
                "Id": "https://www.linkedin.com/in/devupalli-jayanth-37b22b257/",
                "pic": "./Images/D Jayanth.jpg"
            },
            {
                "name": "Madhav",
                "Id": "https://www.linkedin.com/in/madhavmadupu/",
                "pic": "./Images/Madhav.png"
            },
            {
                "name": "Vinay",
                "Id": "https://www.linkedin.com/in/vinay-bolloju-9b7680278/",
                "pic": "./Images/Vinay.png"
            }
        ]
    }
]
var container = document.createElement('div');
    container.className = 'container-fluid';
    container.className = 'teams';

    allDetails.forEach(function(detail) {
        var roleDiv = document.createElement('div');
        roleDiv.className = detail.class;
        roleDiv.style.margin="30px";
        roleDiv.style.color="#ff6900";
        container.appendChild(roleDiv);

        var roleHeader = document.createElement('h1');
        roleHeader.textContent = detail.role;
        roleHeader.style.fontSize="2.3rem";
        roleHeader.style.fontWeight="bold";
        roleHeader.className="text-center";
        roleHeader.style.marginBottom="25px";
        roleDiv.appendChild(roleHeader);


        var section = document.createElement('div');
        section.className="section";
        detail.members.forEach(function(member) {
            var memberDiv = document.createElement('div');
            memberDiv.className = 'member';

            var mainDiv = document.createElement('div');
            mainDiv.className = 'main';

            var imgDiv = document.createElement('div');
            imgDiv.className = 'img';

            var memberImage = document.createElement('img');
            memberImage.className = 'member-img';
            memberImage.src = member.pic;
            memberImage.alt = member.name;

            var detailsDiv = document.createElement('div');
            detailsDiv.className = 'details';

            var nameHeader = document.createElement('h1');
            nameHeader.className = 'detail';
            nameHeader.className = 'name';
            nameHeader.textContent = member.name;
            
            var champYear = document.createElement('h1');
            champYear.className = 'detail';
            champYear.className = 'year';
            champYear.style.fontSize= "1rem";
            champYear.style.fontWeight="bold";
            champYear.className="text-center";
            // champYear.style.marginBottom="25px";
            roleDiv.appendChild(champYear);
    
            
            if (member.year) {  
                champYear.textContent = member.year;
            }

            var idHeader = document.createElement('h2');
            idHeader.className = 'detail';
            idHeader.className = 'id';
            var icon = document.createElement('i');
            icon.className = 'fab fa-linkedin fa-s';
            icon.style.color="#1DA1F2";
            idHeader.appendChild(icon);

            var link = document.createElement('a');
            link.href = member.Id;
            link.textContent = 'LinkedIn Id';
            link.style.margin="5px"
            link.target = '_blank';

            idHeader.appendChild(link);
            
            imgDiv.appendChild(memberImage);

            detailsDiv.appendChild(nameHeader);
            detailsDiv.appendChild(idHeader);
            detailsDiv.appendChild(champYear)
            
            mainDiv.appendChild(imgDiv);
            
            mainDiv.appendChild(detailsDiv);
            // mainDiv.appendChild(champYear);
            


            memberDiv.appendChild(mainDiv);

            section.appendChild(memberDiv);
        });
        roleDiv.appendChild(section)
    });

    document.body.appendChild(container);

