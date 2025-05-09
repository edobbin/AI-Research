import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";
import { motion, scale } from "framer-motion";
import "@fontsource/roboto-mono"; // npm install @fontsource/roboto-mono

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prop1 = {
  hidden: { opacity: 1 },
  show: {
    opacity: 0.5,
    transition: {
      staggeredChildren: 0.25,
    },
  },
};

const titles = [
  "Title",
  "Introduction",
  "Factor(s) Observed",
  "Demographics",
  "Integration with Neural Network",
  "Adjustments and Final Results",
  "Otherstuff",
  "Linkedin"
];

export default function Home() {
  const [titlePage, setTitle] = useState(0);

  return (
    <motion.div
      variants={prop1}
      initial="hidden"
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-x-2 gap-y-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      style={{ background: "transparent",overflow:"hidden"}}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <source src="/videos/presentation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main
        style={{
          position: "sticky",
          fontSize: "clamp(2rem, 5vw, 5.5rem)",
          transform: "scale(1)",
          top: "40px",
          fontFamily: "'Roboto Mono', monospace",
          marginBottom:"0px",
          overflow:"hidden"
        }}
      >
      {titlePage === 0 && (
          <div style={{ width: "100%", height: "100%" }}>
            
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: false,
                cursor: "_",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("The Broken Windows Theory")
                  .callFunction(() => {
                    document
                      .querySelector(".Typewriter__cursor")
                      ?.classList.add("hidden");
                  })
                  .start();
              }}
            />
          </div>
        )}


        {titlePage === 0 && <div style={{ fontSize: "30px", textAlign: "center" }}>
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("By: Daniel Anoruo and Ethan Dobbin")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />
         </div>}
      </main>

      {titlePage === 0 && (
       <Box
        sx={{
          marginTop: "clamp(80px, -12vh, -40px)",
          marginBottom:"-120px",
          width: "clamp(200px, 30vw, 600px)",
          height: "clamp(100px, 40vh, 300px)",
          background: "transparent",
          backgroundImage: 'url("/videos/logo.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position:"relative",
          "&:hover": {
            transform: "scale(1.2)"
          },
          transition:"transform .25s ease-in"
      
          
       }}
     >
     </Box>
     

      )}


      {titlePage === 0 && ( <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Funded by NSF")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />)}

      {titlePage != 0 && (// Actual Presentation
       <Box
            variants={prop1}
            initial="hidden"
            sx={{
              marginTop: "clamp(-100px, -12vh, -40px)",
              width: "clamp(90vw, 92vw, 82vw)",
              height: "clamp(72vh, 72vh, 300px)",
              background: "lightblue",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position:"relative",
              border:"3px solid black",
              borderRadius:"10px",
              overflow:"auto"
              
          }}
        > 
        {titlePage === 1 && <div style={{ fontSize: "30px", textAlign: "center"}}>
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("What is the Broken Windows Theory?")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />

               
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> The Broken Windows Theory suggests that visible signs of disorder, like broken windows or graffiti, create an environment that encourages more serious crime. The theory argues that neglecting minor offenses signals to people that the area is not monitored, leading to an increase in criminal activity. By addressing these small issues early, communities can prevent larger crimes and maintain a safer, more orderly environment. </Typography>
           

             
              <div>


           
                
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("What is our Goal?")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />
        
              </div>


              
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"10px"}}> Based on the Broken Windows Theory, we want to analyze crime rates in Baltimore to see if the theory holds true. The theory suggests that visible signs of disorder, like broken windows, graffiti, and vacant properties, can lead to more serious crime. For instance, areas with a lot of graffiti or abandoned buildings might experience higher rates of theft or drug-related activity. We aim to determine if there's a connection between disorder and crime. This analysis will help us understand if addressing small issues in these areas could reduce larger crimes and improve safety in Baltimore. </Typography>
              <div style={{width:"100%", justifyContent:"center", alignItems:"center",background:"transparent", display: "flex", height:"30%",position:"relative",marginBottom:"10px", gap:"48px"}}>
                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px" }}>
                  <Image
                    aria-hidden
                    src="/videos/baltimore-map.png"
                    alt="Globe icon"
                    width={156}
                    height={156}
                  />
                </div>

                <span style={{ fontSize: "24px" }}>→</span>  

                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px"}}>
                  <Image
                    aria-hidden
                    src="/videos/baltimore.jpg"
                    alt="Globe icon"
                    width={156}
                    height={156}
                  />
                </div>
                <span style={{ fontSize: "24px" }}>→</span>  

                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px" }}>
                  <Image
                    aria-hidden
                    src="/videos/vacant.jpg"
                    alt="Globe icon"
                    width={176}
                    height={176}
                  />
                </div>
                <span style={{ fontSize: "24px" }}>→</span>  

                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px"}}>
                  <Image
                    aria-hidden
                    src="/videos/drugdealer.jpg"
                    alt="Globe icon"
                    width={176}
                    height={176}
                  />
                </div>

              </div>
            
         </div>}

        
         {titlePage === 2 && <div style={{ fontSize: "30px", textAlign: "center"}}>
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Methodology")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />

               
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
              The first step of this research was collecting datasets from <a href="https://data.baltimorecity.gov/" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', textDecoration: 'underline' }}>OpenBaltimore.gov</a>. We used Pandas to organize the data for cleaning and analysis. We then created a linear regression model to find the correlation between vacant properties and crime rates. In the end, we built a machine learning model that predicts which neighborhoods in Baltimore City are most likely to have higher crime rates based on the number of vacant properties in those areas.
                 </Typography>
           

             
              <div>


           
                
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("What Factors Were Observed?")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />
        
              </div>


              
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"10px"}}> 
              We looked at a few different things: the number of vacant properties in each neighborhood, the types of crimes and where they happened, the demographics of the people committing the crimes, and which neighborhoods had the most vacant properties.
                 </Typography>
             
              <div style={{width:"100%", justifyContent:"center", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"48px", overflow:"hidden"}}>



                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px" }}>
                  <Image
                    aria-hidden
                    src="/videos/vacant.jpg"
                    alt="Globe icon"
                    width={276}
                    height={276}
                  />
                </div>
                <span style={{ fontSize: "24px" }}>→</span>  

                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px"}}>
                  <Image
                    aria-hidden
                    src="/videos/drugdealer.jpg"
                    alt="Globe icon"
                    width={276}
                    height={276}
                  />
                </div>

                <span style={{ fontSize: "24px" }}>→</span>  

                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px"}}>
                  <Image
                    aria-hidden
                    src="/videos/demographics.gif"
                    alt="Globe icon"
                    width={236}
                    height={276}
                  />
                </div>
              </div>
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"25px",marginTop:"10px", marginBottom:"10px"}}> 
              <a href="https://github.com/edobbin/AI-Research/tree/main/Data" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', textDecoration: 'underline' }}>Datasets</a>
               </Typography>
            
         </div>}

         {titlePage === 3 && <div style={{ fontSize: "30px", textAlign: "center"}}>
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Leading Neighborhoods of Vacant Properties along with the Linear Regression Model")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />

               
             

              <div style={{width:"100%", justifyContent:"center", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"48px", overflow:"hidden"}}>



                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px" }}>
                  <Image
                    aria-hidden
                    src="/figures/Figure_0.png"
                    alt="Bar Graph"
                    width={676}
                    height={676}
                  />
                </div>
                <span style={{ fontSize: "24px" }}>→</span>  

                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px" }}>
                  <Image
                    aria-hidden
                    src="/figures/Figure_1.png"
                    alt="Bar Graph"
                    width={776}
                    height={676}
                  />
                </div>
              </div>
             
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
                These graphs show the leading neighborhoods with the most vacant properties, along with a linear regression model to visualize the correlation between vacant properties and crime. There is some correlation between the crime counts and vacant properties, this will be used later on to predict crime in the top neighborhoods. 
              </Typography>
           
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"25px",marginTop:"10px", marginBottom:"10px"}}> 
              <a href="https://github.com/edobbin/AI-Research/blob/main/Linear_Reg.py" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', textDecoration: 'underline' }}>First Linear Regression Model</a>
               </Typography>
            
         </div>}
     
         {titlePage === 4 && <div style={{ fontSize: "30px", textAlign: "center"}}>
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Demographics")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />

               
             

              <div style={{width:"100%", justifyContent:"center", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"48px", overflow:"hidden",marginTop:"10px"}}>



                <div style={{ border: "2px solid black", padding: "3px", borderRadius: "8px" }}>
                  <Image
                    aria-hidden
                    src="/figures/Figure_3.png"
                    alt="Bar Graph"
                    width={676}
                    height={676}
                  />
                </div>
                <ul style={{alignItems:"center"}}>
                  <p>Ethnicity:</p>
                  <p>A – Asian</p>
                  <p>B – Black or African American</p>
                  <p>H – Hispanic or Latino</p>
                  <p>I – American Indian or Alaska Native</p>
                  <p>U – Unknown</p>
                  <p>W – White</p>
                </ul>
               
              </div>
             
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
              Most of the people living in these neighborhoods were Black, with White being the second most common group. Looking at this, there’s a noticeable gap in salary between the two demographics.
              </Typography>
           
              <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"25px",marginTop:"10px", marginBottom:"10px"}}> 
              <a href="https://github.com/edobbin/AI-Research/blob/main/demographics.ipynb" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', textDecoration: 'underline' }}>Source Code</a>
               </Typography>
            
         </div>}


         {titlePage === 5 && <div style={{ fontSize: "30px", textAlign: "center"}}>
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Neural Network Training")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />

               
             

              <div style={{width:"100%", justifyContent:"left", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"48px", overflow:"hidden",marginTop:"10px"}}>



                <div style={{width:"50vw"}}>
                  <p>What is R^2?</p>
                  <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
                  
                  R² (R-squared), also known as the coefficient of determination, is a statistical measure that tells you how well your regression model explains the variation in the data.
                  <br></br>
                  The Values Range From 0 to 1
                  <br></br>
                  1 meaning that the ml model perfectly predicts the points and 0 meaning that it doesnt
                  </Typography>
                  
                </div>

                <div style={{width:"50vw"}}>
                  <p>Features Observed</p>
                  <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
                  1.Mean Vacant Property Count
                  <br></br>
                  2.Total Vacant Properties
                  <br></br>

                  3.Number of Neighborhoods with Vacant Properties
                  <br></br>

                  4.Total Crimes
                  <br></br>

                  5.Vacant Properties Per Crime
                  </Typography>
                  
                </div>


               
              </div>
          
          
              <div style={{width:"100%", justifyContent:"center", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"48px", overflow:"hidden",marginTop:"10px"}}>
                <div style={{width:"50vw"}}>
                    <p>What is RMSE?</p>
                    <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
                    
                    RMSE stands for Root Mean Squared Error. Basically, it’s a way to measure how far off our predictions are from the actual values. It takes all the differences between what the model predicted and what really happened, squares them (so negative errors don’t cancel positive ones), averages them, and then takes the square root.
                    <br></br>
                    <br></br>
                    Smaller RMSE = better predictions.
                    <br></br>

                    If RMSE is high, it means our model's not doing a great job — the predictions are pretty far off from the real data.
                    </Typography>
                    
                  </div>

                  <div style={{width:"50vw"}}>
                    <p>Model Performance:</p>
                    <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
                    The model isn't bad, but there's definitely room for improvement. It has an RMSE of 45.89, meaning our predictions are off by around 46 crimes on average. The R² is 0.47, so it explains about 47% of the variation in crime based on vacant properties. We planned to make adjustments to improve both accuracy and how well the model fits the data.
                    </Typography>
                    
                  </div>
              </div>
              <div style={{gap:"23px",justifyContent:"center",width:"100%",height:"10%",backgroundColor:"transparent",alignItems:"center",justifyItems:"center", display:"flex"}}>
                  <Image
                    aria-hidden
                    src="/figures/Figure_5.png"
                    alt="Bar Graph"
                    width={676}
                    height={676}
                  />
                     <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"25px",marginTop:"10px", marginBottom:"10px"}}> 
              <a href="https://github.com/edobbin/AI-Research/blob/main/mlandvisualizationpreadjustments.ipynb" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', textDecoration: 'underline' }}>Source Code</a>
               </Typography>
                </div>
           
           
            
         </div>}



         {titlePage === 6 && <div style={{ fontSize: "30px", textAlign: "center"}}>
              <TypewriterComponent
                options={{ autoStart: true, cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Adjustments and Final Results")
                    .callFunction(() => {
                      document
                        .querySelector(".Typewriter__cursor")
                        ?.classList.add("hidden");
                    })
                    .start();
                }}
              />

               
             

              <div style={{width:"100%", justifyContent:"left", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"48px", overflow:"hidden",marginTop:"10px"}}>



                <div style={{width:"50vw"}}>
                  <p>Final Results</p>
                
                  <div style={{gap:"23px",justifyContent:"center",width:"100%",height:"10%",backgroundColor:"transparent",alignItems:"center",justifyItems:"center", display:"flex"}}>
                  <Image
                    aria-hidden
                    src="/figures/Figure_4.png"
                    alt="Bar Graph"
                    width={676}
                    height={676}
                  /></div>
                </div>

                <div style={{width:"50vw"}}>
                  <p>Adjustments Made</p>
                <ul style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "18px", lineHeight: "1.8" }}>
                  <li>Added more features like <code>Crime_Count_sum</code> and <code>Vacant_Per_Crime</code> to give the model more to learn from</li>
                  <li>Scaled both X and y so the model trains more efficiently</li>
                  <li>Made the neural net deeper by adding an extra hidden layer</li>
                  <li>Added dropout to reduce overfitting</li>
                  <li>Lowered the learning rate to 0.001 for more stable training</li>
                </ul>

                  
                </div>
              </div>
          
          
              <div style={{width:"100%", justifyContent:"center", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"48px", overflow:"hidden",marginTop:"10px"}}>

                  <div style={{width:"50vw"}}>
                    <p>Model Performance:</p>
                    <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
                     Neural net did solid — RMSE was 2.55 and R² hit 1.00. Linear regression baseline actually did even better — RMSE dropped to 0.00 with R² still at 1.00. 

                    </Typography>
                    
                  </div>

                  <div style={{width:"50vw"}}>
                    <p> Conclusion:</p>
                    <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"20px",marginTop:"10px", marginBottom:"25px"}}> 
                    Based on the data we collected, the Broken Windows Theory appears to hold true. To effectively address crime rates in Baltimore, we need to confront these underlying issues directly.
                    </Typography>
                    
                  </div>
              </div>
              <div style={{gap:"23px",justifyContent:"center",width:"100%",height:"10%",backgroundColor:"transparent",alignItems:"center",justifyItems:"center", display:"flex"}}>
                     <Typography sx={{fontFamily: "'Roboto Mono', monospace",alignItems:"center",justifyContent:"center", fontSize:"25px",marginTop:"10px", marginBottom:"10px"}}> 
              <a href="https://github.com/edobbin/AI-Research/blob/main/mlandvisualizationpreadjustments.ipynb" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', textDecoration: 'underline' }}>Source Code</a>
               </Typography>
                </div>
           
           
            
         </div>}


         {titlePage === 7 && <div style={{ fontSize: "30px", textAlign: "center"}}>
          <TypewriterComponent
                  options={{ autoStart: true, cursor: "_" }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Contact Us")
                      .callFunction(() => {
                        document
                          .querySelector(".Typewriter__cursor")
                          ?.classList.add("hidden");
                      })
                      .start();
                  }}
                />
             <div style={{width:"100%", justifyContent:"left", alignItems:"center",background:"transparent", display: "flex", height:"50%",position:"relative",marginBottom:"10px", gap:"24%", overflow:"hidden",marginTop:"10px"}}>


              <div>
              <div style={{
                width: "15vw",
                height: "30vh",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "5px solid black",
                overflow: "hidden"
              }}>
                <Image
                  aria-hidden
                  src="/videos/contact1.jpg"
                  alt="Bar Graph"
                  width={550}
                  height={550}
                  style={{ borderRadius: "50%" }}
                />
              </div>


              <div style={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems: "center"}}>

              <p>Daniel Anoruo</p>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://www.linkedin.com/in/danano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >LinkedIn</a>


                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://github.com/danoruo1"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub</a>
              </div>
            

              </div>


              <div>
              <div style={{
                width: "15vw",
                height: "30vh",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "5px solid black",
                overflow: "hidden"
              }}>
                <Image
                  aria-hidden
                  src="/videos/contact2.jpg"
                  alt="Bar Graph"
                  width={550}
                  height={550}
                  style={{ borderRadius: "50%" }}
                />
              </div>


              <div style={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems: "center"}}>

              <p>Ethan Dobbin</p>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://www.linkedin.com/in/ethan-dobb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >LinkedIn</a>


                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://github.com/edobbin"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub</a>
              </div>
            

              </div>

              <div>
              <div style={{
                width: "15vw",
                height: "30vh",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "5px solid black",
                overflow: "hidden"
              }}>
                <Image
                  aria-hidden
                  src="/videos/contact-3.jpg"
                  alt="Bar Graph"
                  width={550}
                  height={550}
                  style={{ borderRadius: "50%" }}
                />
              </div>


              <div style={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems: "center"}}>

              <p>Michael McGuire</p>
               <p>PI</p>
              </div>
            

              </div>



            




              
              </div>
        
        
        
          </div>}









        </Box>
      )}

      <div
        style={{
          width: "clamp(250px, 60vw, 900px)",
          height: "clamp(60px, 10vh, 120px)",
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          flexWrap: "wrap",
        }}
      >
        <Button
          sx={{
            width: "clamp(100px, 10vw, 200px)",
            height: "clamp(40px, 7vh, 80px)",
            background: "transparent",
            fontFamily: "'Roboto Mono', monospace",
            color: "black",
            fontSize: "clamp(3rem, 1vw, 4.2rem)",
            "&:hover": {
              transform: "scale(1.2)"
            },
            transition:"transform .25s ease-in"
          }}
          onClick={() => {
            if (titlePage != 0){
              setTimeout(() => { setTitle((titlePage - 1 + titles.length) % titles.length)}
                  
              , 50)
             }
          }}
        >
          ←
        </Button>
        <Button
          sx={{
            width: "clamp(100px, 10vw, 200px)",
            height: "clamp(40px, 7vh, 80px)",
            background: "transparent",
            fontFamily: "'Roboto Mono', monospace",
            color: "black",
            fontSize: "clamp(3rem, 1vw, 4.2rem)",
            "&:hover": {
              transform: "scale(1.2)"
            },
            transition:"transform .25s ease-in"
          }}
          onClick={() => {
            setTimeout(() => {
              setTitle((titlePage + 1) % titles.length)
            }, 50)
           }}
        >
          →
        </Button>
      </div>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/edobbin/AI-Research"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.britannica.com/topic/broken-windows-theory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Reference
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/search/results/all/?keywords=Baltimore%20Data%20Science%20Corps&sid=R7d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </motion.div>
  );
}
