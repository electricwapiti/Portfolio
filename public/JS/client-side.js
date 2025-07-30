import { afterEach } from "node:test";

$(document).ready(function() {
    const $textarea = $('#mastodonPost');
    const $characterCountDisplay = $('#characterCount');
    const $postButton = $('#postButton');
    const maxLen = 500;

    function updateCharacterCount() {
        const currentLen = $textarea.val().length;
        const remainingChars = maxLen - currentLen;

        $characterCountDisplay.text(`${currentLen} / ${maxLen} characters`);

        // Reset classes
        $characterCountDisplay.removeClass('text-danger text-success');

        if(currentLen > maxLen) {
            $characterCountDisplay.addClass('text-danger');
            $postButton.prop('disabled, true');
        } else {
            $characterCountDisplay.addClass('text-success');
            $postButton.prop('disabled, false');
        }
    }

    // Initial call to set the correct state on page load
    updateCharacterCount();

    // Listen for input events on the textarea using .on()
    $textarea.on('input', updateCharacterCount);
})