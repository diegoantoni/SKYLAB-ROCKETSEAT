module.exports={
    entry: ['@babel/polyfill','./src/main.js'],
    //entry: ['@babel/polyfill','./desafio/asyncawait/ex1.js'],
    //entry: ['@babel/polyfill','./desafio/asyncawait/ex2.js'],
    //entry: ['@babel/polyfill','./desafio/asyncawait/ex3.js'],
    //entry: ['@babel/polyfill','./desafio/asyncawait/ex4.js'],
    output:{
        path: __dirname + '/public',
        //path: __dirname + '/desafio/asyncawait',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/public'
    },
    module:{
        rules:[
            {
                 //expressao regular que indica em qual tipo de arquivo deve funcionar
                 test: /\.js$/,
                 //funcionar somante nos arquivos fora da node_modules
                 exclude: /node_modules/,
                 use:{
                     loader: 'babel-loader',
                 }
            }
        ],
    },
};