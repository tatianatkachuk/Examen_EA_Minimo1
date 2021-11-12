import app from './app'
import { startConnection } from './database'

// Settings
app.set('port', process.env.PORT || 4000);

async function main() {
    startConnection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();