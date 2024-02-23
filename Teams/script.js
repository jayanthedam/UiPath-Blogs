let allDetails=[
    {
        "role": "Mentors:",
        "class": "mentor",
        "members": [
            {
                "name": "T Srinivasa Rao",
                "Id": "https://www.linkedin.com/in/prof-t-srinivasa-rao-40a1b687/",
                "pic": "./Images/T Srinivasa Rao.jpg",
                "role":"Director of TPC"
            },
            {
                "name": "Y V S Durga Prasad",
                "Id": "https://www.linkedin.com/in/y-v-s-durga-prasad-76214928b/",
                "pic": "./Images/Y V S Durga Prasad.jpg",
                "role":"Placement Officer"
            },
            {
                "name": "Krishnanand S H",
                "Id": "https://www.linkedin.com/in/krishnanandsh/",
                "pic": "./Images/Krishnanand S H.png",
                "role":"UiPath Educator"
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
                "role": "2023-2024"
            },
            {
                "name": "Aarthi Mupparthy",
                "Id": "https://www.linkedin.com/in/m-aarthi/",
                "pic": "./Images/Aarthi Mupparthy.jpg",
                "role": "2022-2023"
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
                "pic": "./Images/S Ronak-Jain.png",
                "role":"Ex Core team member"
            },
            {
                "name": "E Jayanth",
                "Id": "https://www.linkedin.com/in/jayanth-edam/",
                "pic": "./Images/E Jayanth.jpg",
                "role":"Web Developer"
            }
        ]
    },
    {
        "role": "Core Team Members:",
        "class": "core",
        "members": [
            {
                "name": "Tarun Vuppala",
                "Id": "https://www.linkedin.com/in/tarun26/",
                "pic": "./Images/Tarun.jpg",
                "role":"Web Developer"
            },
            {
                "name": "Manchikanti Varun",
                "Id": "https://www.linkedin.com/in/varun-manchikanti/",
                "pic": "./Images/Varun.jpg",
                "role":"Content Creator"
            },
            {
                "name": "D Jayanth",
                "Id": "https://www.linkedin.com/in/devupalli-jayanth-37b22b257/",
                "pic": "./Images/Jayanth D.jpg",
                "role":"Web Developer"
            },
            {
                "name": "M Madhav",
                "Id": "https://www.linkedin.com/in/madhavmadupu/",
                "pic": "./Images/Madhav.png",
                "role":"Web Developer"
            },
            {
                "name": "B Vinay",
                "Id": "https://www.linkedin.com/in/vinay-bolloju-9b7680278/",
                "pic": "./Images/Vinay.png",
                "role":"Core Team member"
            }
        ]
    },
    {
        "role": "UiPath Club Members:",
        "class": "team",
        "members": [
            {
                "name": "Tharuni Kadudula",
                "Id": "http://www.linkedin.com/in/tharuni-kadudula",
                "pic": "./Images/Tharuni.jpg",
            },
            {
                "name": "J Praneeth",
                "Id": "https://www.linkedin.com/in/praneeth-j/",
                "pic": "./Images/Praneeth.jpg",
            },
            {
                "name": "Tejaswi Marka",
                "Id": "https://www.linkedin.com/in/tejaswi-marka-398ab3261/",
                "pic": "./Images/Tejaswi.jpg",
            },
            {
                "name": "Shivathmika Bollapally",
                "Id": "https://www.linkedin.com/in/shivathmika-bollapally-037547264/",
                "pic": "./Images/Shivatmika.jpg",
            },
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
            
            var champRole = document.createElement('h1');
            champRole.className = 'detail';
            champRole.className = 'role';
            champRole.style.fontSize= "1rem";
            champRole.style.fontWeight="400";
            champRole.className="Role";
            // champRole.style.marginBottom="25px";
            roleDiv.appendChild(champRole);
    
            
            if (member.role) {  
                champRole.textContent = member.role;
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
            detailsDiv.appendChild(champRole)
            
            mainDiv.appendChild(imgDiv);
            
            mainDiv.appendChild(detailsDiv);
            // mainDiv.appendChild(champRole);
            


            memberDiv.appendChild(mainDiv);

            section.appendChild(memberDiv);
        });
        roleDiv.appendChild(section)
    });

    document.body.appendChild(container);

