/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:

Function findStudentById มี Big O เป็น O(n) เนื่องจากเป็นการใช้ linear search และ n คือจำนวนที่เพิ่มขึ้นตามสมาชิกของ array

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:

Function findProductPrice มี Big O เป็น O(log n) เนื่องจากเป็นการ search โดยใช้ binary search ที่จะมีการหารครึ่งจำนวนสมาชิกลงเรื่อยๆ


*/

/* 
Which function is more efficient and why?
Answer:

ประสิทธิภาพของแต่ละ function นั้นขึ้นอยู่กับรูปแบบข้อมูลด้วย เช่น

    - ถ้า Array ไม่ได้ถูกจัดเรียงมา การใช้ linear search จะเป็น algorithm ที่เหมาะสมมากกว่า เนื่องจากเป็นการไล่ทีละสมาชิกโดยไม่มีลำดับมาเกี่ยวข้อง (ซึ่งสำหรับข้อมูลรูปแบบนี้จะไม่สามารถใช้ binary search ในการหาข้อมูลได้เลย)

    - แต่ถ้าเป็น Array ที่ถูกเรียงลำดับข้อมูลมาแล้ว การใช้ binary search จะเหมาะกว่ามาก เนื่องจากมีการใช้เวลาที่น้อยกว่า ไม่จำเป็นต้องไล่ทุกสมาชิก (ซึ่งจริงๆแล้วสามารถใช้ linear search กับข้อมูลชุดนี้ได้ แต่จะมีประสิทธิภาพน้อยกว่า เนื่องจากใช้เวลามากกว่า)


*/
