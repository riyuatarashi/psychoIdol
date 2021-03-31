var db = openDatabase('save', '1.0', 'sauvegarde', 2 * 1024 * 1024);

let save = document.querySelector('#save');
db.transaction(function (tx) {  
    tx.executeSql('CREATE TABLE IF NOT EXISTS SAVE (name, stage, kill, heal, point, postionX, postionY, direction, speed, defense, strength, map, cameraX, cameraY )');
 });

    db.transaction(function (tx) {  
        tx.executeSql('INSERT INTO SAVE (name, stage, kill, heal, point, postionX, postionY, direction, speed, defense, strength, map, cameraX, cameraY ) VALUES ("SAVE1", NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), ("SAVE2", NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), ("SAVE3", NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL) ');
     });
    

save.addEventListener('click', function() {
  
    db.transaction(function (tx) {  
        tx.executeSql('UPDATE SAVE SET name = "VALUE", stage = "VALUE", kill = "VALUE", heal = "VALUE", point = "VALUE", postionX = "VALUE" , postionY = "VALUE" , speed = "VALUE" , defense = "VALUE" , strength = "VALUE" , map = "VALUE" , cameraX = "VALUE", cameraY = "VALUE"     WHERE id=?', [id]);
     });
});

let id = 1;
let delet = document.querySelector('#delete');

delet.addEventListener('click', function() {
    db.transaction(function(tx) {
        tx.executeSql('DELETE FROM SAVE WHERE rowid=?', [id]);
    });
});

function affsave(menu) {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM SAVE', [], function (tx, results) {
           var len = results.rows.length;
           for (let k = 0; k < len; k++){
               info = document.createElement('button');
               info.innerHTML = results.rows.item(k).name;
               menu.appendChild(info) ;
           }
        }, null);
     });
}


// db.transaction(function(tx) {
//     tx.executeSql('DROP TABLE SAVE');
// });