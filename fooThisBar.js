/**
 * Created by JohnH.Evans on 02/10/2014.
 */

fooBarEnclosure = (function(){
    function foo(){
        console.log('FOO!')
    }

    function bar(){
        foo();
    }

    return {
        foo: foo,
        bar: bar
    }
})();


// Non-enclosed functions, in the wild if you will

window.wildFoo = function(){
    console.log('WILD FOO!');
}

window.wildBar = function(){
    wildFoo();
}