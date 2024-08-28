
#include <AccelStepper.h>

const int stepPin = 4;  // changed this
const int dirPin = 5;   // changed this

// Define a stepper and the pins it will use
AccelStepper stepper(1, stepPin, dirPin); // initialise accelstepper for a two wire board

void setup()
{
}


void loop()
{

  //  delay(random(2000,3000));

  {
    // Random change to speed, position and acceleration
    // Make sure we dont get 0 speed or accelerations
  //  delay(random(20, 30)); // set random delay
    stepper.moveTo(-400); //changed this to 51 since 200/4 = 50
    stepper.setMaxSpeed(10000);
    stepper.setAcceleration((20000) + 1);


  }
  stepper.run();

  //delay(random(2000,3000));

  {
    // Random change to speed, position and acceleration
    // Make sure we dont get 0 speed or accelerations
    delay(random(20, 30)); // set random delay
   
    
    stepper.moveTo(-101); //changed this to 51 since 200/4 = 50
    stepper.setMaxSpeed(1000);
    stepper.setAcceleration((20000) + 1);


  }
  stepper.run();



}
