function book(bookdata, discount, tax, stock, purchase){
    let result = 0;
    let price1, amountdisc1, pricedisc1, amounttax1, pricetax1;

    for(let i=0; i<purchase;i++){
        if (bookdata && bookdata.price && (i<stock)){
            
            const price = bookdata.price;
            const amountdisc = price*(discount/100);
            const pricedisc = price - amountdisc;
            const amounttax = pricedisc*(tax/100);
            const pricetax = pricedisc - amounttax;
            result+=pricetax;

            price1 = price;
            amountdisc1 = amountdisc;
            pricedisc1 = pricedisc;
            amounttax1 = amounttax;
            pricetax1 = pricetax;
    
           
        }
        else{
            console.log("sorry, out of stock");
            break;
        }
    }

    console.group();
    console.log('Title               : ', bookdata.title);
    console.log('Original            : ', price1);
    console.log('Disc Amount         : ', amountdisc1);
    console.log('Price After Dis     : ', pricedisc1);
    console.log('Tax Amount          : ', amounttax1);
    console.log('Price After Tax     : ', pricetax1);
    console.log('Total Order         : ', purchase);
    console.log('Total               : ', result);
    console.groupEnd(); 

    
    return result;
}

book({title : 'Ayah', price:99.999, printingstatus : true},10,5, 10, 1);
book({title : 'Educated', price:120.999, printingstatus : true},10,5, 5, 1);
book({title : 'Bicara itu Ada Seninya', price:99.999, printingstatus : true},10,5, 15, 20);
book({title : 'Guru Aini', price:99.999, printingstatus : true},10,5, 6, 1);
book({title : 'Laskar Pelangi', price:99.999, printingstatus : true},10,5, 7, 1);
book({title : 'How to Talk with Strangers', price:120.000, printingstatus : true},10,5, 10, 1);
book({title : 'Sebuah Seni Untuk Bersikap Bodoh Amat', price:89.999, printingstatus : true},10,5, 15, 1);