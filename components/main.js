if (localStorage.getItem("InformationAboutYou")) {
  document.getElementById("Ask").innerHTML = `
    <div style="width: 100% ; height: 100% ; z-index: 99; background-color: rgba(0, 0, 0, 0.5 ); position: absolute; left: 0px ; top: 0px ;"></div>
        <div style="width: 100%; height: 100%; position: absolute ; z-index: 100 ; left: 0px ; top: 0px ; display: flex ; align-items: center ; justify-content: center ; ">
            <div style="width: 70% ; height: 70% ; background-color: rgb(15,19, 25); border-radius: 30px ; display: flex ; flex-direction: column ; align-items: center ; justify-content: center;">
                <div style="font-size: 25px ;">Использовать введённые ранее данные ?</div>
                <div style="width: 70% ; display: flex ; justify-content: space-around ; margin-top: 50px ;">
                    <div><input type="button" value="да" id='UseJson'></div>
                    <div><input type="button" value="нет" id='UseJson'></div>
                </div>    
            </div>
        </div>  
    `;
}

document.querySelector("body").addEventListener("click", (e) => {
  let Json = JSON.parse(localStorage.getItem("InformationAboutYou"));
  if (e.target.id == "UseJson") {
    if (e.target.value == "да") {
      document.getElementById("name").value = Json["whoYou"].name;
      document.getElementById("typeWork").value = Json["whoYou"].placeWork;
      document.getElementById("Ask").innerHTML = ``;
      nextPage();
    } else if (e.target.value == "нет") {
      document.getElementById("Ask").innerHTML = ``;
    }
  }
});

function nextPage() {
  let LocalJsonAbouYou = {
    whoYou: {
      name: `${document.getElementById("name").value}`,
      placeWork: `${document.getElementById("typeWork").value}`,
    },
  };

  localStorage.setItem("InformationAboutYou", JSON.stringify(LocalJsonAbouYou));

  let Json1 = JSON.parse(localStorage.getItem("InformationAboutYou"));
  let NameAfterOb = Json1["whoYou"].name;

  document.getElementById("NameAfter").innerHTML = `, для ${NameAfterOb}`;

  if (document.getElementById("typeWork").value == "school") {
    document.getElementById("MainBodyCenter").innerHTML = `
    <div class="SchoolPage">
    <form action="">
    <div>
        <div>Укажите время на сборы до школы ?</div>
        <div><input type="time" required></div>
    </div>
    <div>
        <div>Укажите время начала уроков ?</div>
        <input type="time" required>
    </div>
    <div>
        <div>Укажите время на путь в школу ?</div>
        <div> <input type="time" required></div>
    </div>
    <div>
        <div>Укажите время конца уроков ?</div>
        <div><input type="time" required></div>
    </div>
    <div>
        <div>Есть ли дополнительные занятия ?</div>
        <div><select id="" required>
            <option value="">---</option>
            <option value="false">Нет</option>
            <option value="true">Есть</option>
        </select></div>
    </div>
    <input style="width: 180px ;" type="button" value="Следующая страница">
</div>

</form>
</div>  
    `;
  } else {
    alert(
      `Раздел < ${
        document.getElementById("typeWork").value
      } > пока не работает , приносим свои извинения`
    );
  }
}
