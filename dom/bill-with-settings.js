const radioBillAddButton = document.querySelector(".radioBilladdBtn");
const callTotalSettingsElem = document.querySelector(".callTotalSettings");
const smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
const totalSettingsElem = document.querySelector(".totalSettings");
const callCostSettingElem = document.querySelector(".callCostSetting");
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
const updateSettingsElem = document.querySelector(".updateSettings");

const billSet = billSettings();


function settingsUpdate() {


  billSet.setCallCost(Number(callCostSettingElem.value));
  billSet.setSmsCost(Number(smsCostSettingElem.value));
  billSet.setWarningLevel(Number(warningLevelSettingElem.value));
  billSet.setCriticalLevel(Number(criticalLevelSettingElem.value));
  colorCode();

}


function buttonCLicked() {

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn) {

    var billItemType = checkedRadioBtn.value
  }
  if (billItemType === "call") {
    billSet.makeCall();

  }
  else if (billItemType === "sms") {
    billSet.sendSms();
  }


  callTotalSettingsElem.innerHTML = billSet.getTotalCallCost().toFixed(2);
  smsTotalSettingsElem.innerHTML = billSet.getTotalSmsCost().toFixed(2);
  colorCode();
  totalSettingsElem.innerHTML = billSet.getTotalCost().toFixed(2);

}
function colorCode() {
  totalSettingsElem.classList.remove("warning");
  totalSettingsElem.classList.remove("critical");
  
  totalSettingsElem.classList.add(billSet.totalClassName());


}

radioBillAddButton.addEventListener("click", buttonCLicked);
updateSettingsElem.addEventListener("click", settingsUpdate);