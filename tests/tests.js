/* eslint-env jasmine */

exports.defineAutoTests = function () {
	describe('DateTimePicker (cordova.plugins.DateTimePicker)', function () {
		it('should exist', function () {
			expect(cordova.plugins.DateTimePicker).toBeDefined();
		});
	});
};

exports.defineManualTests = function (contentEl, createActionButton) {
	var logMessage = function (message, color) {
		var log = document.getElementById('info');
		var logLine = document.createElement('div');
		if (color) {
			logLine.style.color = color;
		}
		logLine.innerHTML = message;
		log.appendChild(logLine);
	};

	var clearLog = function () {
		var log = document.getElementById('info');
		log.innerHTML = '';
	};

	var tests = '<h3>Press Show button to show the date time picker</h3>' +
		'<div id="showBtn"></div>' +
		'Expected result: Status box will get updated for success, error and cancel events.';

	contentEl.innerHTML = '<div id="info"></div>' + tests;

	createActionButton(
		'Show', 
		function () {
			clearLog();
			cordova.plugins.DateTimePicker.show({
				date: new Date(),
				success: function(newDate) {
					logMessage("Success: " + newDate.toString());
				},
				cancel: function() {
					logMessage("Cancelled");
				},
				error: function(err) {
					logMessage(err.toString());
				}
			});
		},
		'showBtn'
	);
};