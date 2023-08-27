export default async (req,res) => {
    let weather = await $fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.WEATHERE_API_KEY}`);
    return weather;
}

