/**
 * Created by JohnH.Evans on 02/10/2014.
 */
 describe("a function in the wild which we can mock until it's not funny any more", function(){
    it("should be think it's calling wildFoo, but actually we'll mock it out", function(){
        spyOn(window, 'wildFoo');
        window.wildBar();
        expect(window.wildFoo).toHaveBeenCalled();
    });
 });

 describe("a function enclosed which will only talk to its fellow inmates", function(){
    it("should be think it's calling wildFoo, but actually we'll mock it out... or will we?", function(){
        spyOn(fooBarEnclosure, 'foo');
        fooBarEnclosure.bar();
        expect(fooBarEnclosure.foo).toHaveBeenCalled();
    });
 });