const form = document.querySelector('form')

function createCommentBlock(firstName, lastName, message) {
    const template = document.createElement('template');
    template.innerHTML =`
    <div class="flex space-x-4 text-sm text-gray-500">
    <div class="flex-1 py-10 border-t border-gray-200">
        <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
        </div>
        </div>
    </div>
    ` ;
    return template.content
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const firstNameElement = document.getElementById('first-name')
    const lastNameElement = document.getElementById('last-name')
    const messageElement = document.getElementById('message')

    const firstName = firstNameElement.value.trim()
    const lastName = lastNameElement.value.trim()
    const message = messageElement.value.trim()

    if (!firstName || !lastName || !message) {
        document.getElementById('error-message').style = 'display: block'
    } else {
        document.getElementById('error-message').style = 'display: none'
        firstNameElement.value = ''
        lastNameElement.value = ''
        messageElement.value = ''
        const list = document.getElementById('comment-list')
        const commentElement = createCommentBlock(firstName, lastName, message)
        console.log(commentElement)
        list.appendChild(commentElement)
    }
})