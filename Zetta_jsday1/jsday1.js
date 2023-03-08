function book(bookdata, discount, tax){
    let result = 0;

    if (bookdata && bookdata.price){
        const price = bookdata.price;
        const amountdisc = price*(discount/100);
        const pricedisc = price - amountdisc;
        const amounttax = pricedisc*(tax/100);
        const pricetax = pricedisc - amounttax;

        console.group();
        console.log('Title               : ', bookdata.title);
        console.log('Original            : ', price);
        console.log('Disc Amount         : ', amountdisc);
        console.log('Price After Dis     : ', pricedisc);
        console.log('Tax Amount          : ', amounttax);
        console.log('Price After Tax     : ', pricetax);
        console.groupEnd(); 
    }
    return result;
}

book({title : 'Ayah', price:99.999, printingstatus : true},10,5);