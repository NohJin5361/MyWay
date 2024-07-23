const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306', 
  user: 'root',  // MySQL 사용자 이름
  password: '1234',  // MySQL 비밀번호
  database: 'map_data'  // 사용할 데이터베이스 이름
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

function insertDotsData(dots) {
  dots.forEach((dot) => {
    const query = 'INSERT INTO dots_table (dot_value) VALUES (?)'; // 쿼리 작성
    connection.query(query, [dot], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
        } else {
            console.log('Inserted: ', results.insertId);
        }
    }); 
  });
}

module.exports = {
  insertDotsData
};

// 연결 종료
connection.destroy();