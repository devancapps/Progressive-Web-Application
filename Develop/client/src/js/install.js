const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    let deferredPrompt = event;

    butInstall.style.display = 'block';

    butInstall.addEventListener('click', async () => {

        deferredPrompt.prompt();


        const { outcome } = await deferredPrompt.userChoice;


        console.log(`User response to the install prompt: ${outcome}`);

        deferredPrompt = null;
    });
});


window.addEventListener('appinstalled', (event) => {

    console.log('PWA was installed');

    butInstall.style.display = 'none';
});

