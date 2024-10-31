using Microsoft.AspNetCore.Mvc;
using uydu_proje.Services;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();

builder.Services.AddScoped<UyduGoruntuleriService>();
builder.Services.AddHttpClient<UyduGoruntuleriService>();

var app = builder.Build();

public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
    services.AddCors(options =>
    {
        options.AddPolicy("AllowOrigin",
            builder => builder.WithOrigins("http://localhost:5173") // React uygulamanýzýn URL'si
                              .AllowAnyHeader()
                              .AllowAnyMethod());
    });
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseHttpsRedirection();

    app.UseRouting();

    app.UseCors("AllowOrigin");

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}

app.Run();



