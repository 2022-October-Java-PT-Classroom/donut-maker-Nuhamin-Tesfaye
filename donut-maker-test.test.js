import DonutMaker from './donut-maker.js';


describe ('DonutMaker object', () => {
    test('does donut maker add one donut to count', () => {
      const underTest= new DonutMaker(1);
      underTest.donutCounter();
      expect(underTest.donutCount).toEqual(2);

    });

    test("can donut maker retrieve the donut count", () => {

        const underTest = new DonutMaker(1);
        underTest.donutCounter();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(2);
    });

    test("does retrieve an Auto Clicker count", () => {

        const underTest = new DonutMaker(1,100);
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(100);
          

    });
}); 

    
