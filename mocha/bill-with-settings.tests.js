describe("The bill with settings factory function", function () {
    it('should be able to set the call cost', function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.setCallCost());
    });


    it("should be able to set the sms cost", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost())

        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(0.75);

        assert.equal(0.75, settingsBill2.getSmsCost());


    });

    it("should be able to set the sms cost and call cost", function () {
        let settingsBill = BillWithSettings();

        settingsBll.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);

        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(2.75, settingsBill.getCallCost());


    });

    it("should be able to set the warning level", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(30)
        assert.equal(30, settingsBill.getWarningLevel())

    });

    it("should be able to set the critical level", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(60)

        assert.equal(60, settingsBill.getCriticalLevel())

    });

    it("should be able to set the warning level and critical level", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(60);
        settingsBill.setWarningLevel(30);

        assert.equal(60, settingsBill.getCriticalLevel());
        assert.equal(30, settingsBill.getWarningLevel());
    });

    describe("use value", function () {

        it("should be able to use the call cost set", function () {
            let settingsBill = BillWithSettings()

            settingsBill.setCallCost(2,75)
            settingsBill.setSmsCost(0.85)

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            
            assert.equal(8.25, settingsBill.getTotalCost());
            assert.equal(8.25, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });
    });
});
