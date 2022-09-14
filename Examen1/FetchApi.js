// creamos 

const bbApiUrl= "https://www.breakingbadapi.com/api/";

const bb = () =>{

    const perStatElements = {

        occupation : document.getElementById("perStatOccupation"),
        status : document.getElementById("perStatStatus"),
        nickname : document.getElementById("perStatNickname"),
        appearance : document.getElementById("perStatAppearance"),
        portrayed : document.getElementById("perStatPortrayed"),
        category : document.getElementById("perStatCategory")
    };

    //referencia

    let currentClassType= null;

    const imageTemplate = "<img class='perdisplay' src='{imgSrc}' alt='perdisplay' />"

    const images= {

        imgPerNotFound: "./img/2.png",
        imgLoading: "./img/3.gif"
    }

    //referencias de los elementos

    const container= {

        imageContainer: document.getElementById("perdisplay-container"),
        perBirthdayContainer: document.getAnimations("perBirthday"),
        perNameElement: document.getElementById("perNameResult"),
        perId: document.getElementById("perID")
    };

    const buttons = {

         all : Array.from(document.getElementById("btn")),
         search : document.getElementById("btnSearch"),
         next : document.getElementById("btnUp"),
         previous : document.getElementById("btnDown")
    };

    //recibe el resultado de busqueda

    const processPerBirthdays =(perData) =>{

        let perType="";

        const firstClass= perData.birthdays[0].birthday.name;

        perData.birthdays.forEach((perBirthdayData) => {

            perBirthday += `<span class="per-birthday ${perBirthdayData.birthday.name}">${perBirthdayData.birthday.name}</span>`;
        });

        currentClassType = firstClass;

        container.perBirthdayContainer.innerHTML = perBirthday;


    };

    const processPerStats = (perData) => {
        
        perData.stats?.forEach((perStatData) => {
            
            switch (perStatData.stat.name) {
                case "occupation":
                    perStatElements.occupation.innerHTML = perStatData.base_stat;
                    perStatElements.occupation.style = `background: linear-gradient(0deg, rgba(6,124,261,7) ${perStatData.base_stat}%, rgba(6,6,6,7) ${perStatData.base_stat}%); `;
                    break;
                case "attack":
                    perStatElements.status.innerHTML = perStatData.base_stat;
                    perStatElements.status.style = `background: linear-gradient(0deg, rgba(6,124,261,7) ${perStatData.base_stat}%, rgba(6,6,6,7) ${perStatData.base_stat}%); `;
                    break;
                case "defense":
                    perStatElements.nickname.innerHTML = perStatData.base_stat;
                    perStatElements.nickname.style = `background: linear-gradient(0deg, rgba(6,124,261,7) ${perStatData.base_stat}%, rgba(6,6,6,7) ${perStatData.base_stat}%); `;
                    break;
                case "special-attack":
                    perStatElements.appearance.innerHTML = perStatData.base_stat;
                    perStatElements.appearance.style = `background: linear-gradient(0deg, rgba(6,124,261,7) ${perStatData.base_stat}%, rgba(6,6,6,7) ${perStatData.base_stat}%); `;
                    break;
                case "special-defense":
                    perStatElements.portrayed.innerHTML = perStatData.base_stat;
                    perStatElements.portrayed.style = `background: linear-gradient(0deg, rgba(6,124,261,7) ${perStatData.base_stat}%, rgba(6,6,6,7) ${perStatData.base_stat}%); `;
                    break;
                case "speed":
                    perStatElements.category.innerHTML = perStatData.base_stat;
                    perStatElements.category.style = `background: linear-gradient(0deg, rgba(6,124,261,7) ${perStatData.base_stat}%, rgba(6,6,6,7) ${perStatData.base_stat}%); `;
                    break;
            }
        });
    };
}