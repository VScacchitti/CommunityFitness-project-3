const mongoose = require("mongoose");
const db1 = require("../models/record");
const db2 = require("../models/exercise");
const db3 = require("../models/workout");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/communityfitnessbackup"
);

const recordSeed = [
    {
      name: "Deadlift",
      weight: 375,
      reps: 1

    },
    {
      name: "Clean and Jerk",
      weight: 195,
      reps: 1
    }
  ];

  db1.Record
  .remove({})
  .then(() => db1.Record.collection.insertMany(recordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



const exerciseSeed = [
  {
    focus: "Strength",
    name: "Barbell Chest Press(Flat)",
    bodypart: "Chest",
    description: "Lie back on a flat bench with your head under the barbell rack and your feet flat on the floor. Grasp the bar (overhand grip) with your hands just outside shoulder width, press the barbell off the rack (unrack the bar), and begin with it directly over your upper pectorals (collar bones) with your arms extended. Your head, shoulders, and buttocks should be solidly on the bench.Bend your elbows to slowly lower the bar toward your mid-chest – nipple line (or lower chest), keeping your elbows pointed at 45 to 60 degrees from the sides. Touch your chest lightly with the bar, then press it back up in a slight backward arcing motion so the bar ends up over your upper chest with your arms extended but not locked out. Keep your back straight (not arched) and against the bench all the time.",
    image: "scripts/Images/flat-barbell-bench-press.jpg",
    scale: "light weight, floor press, just the bar, push-up"
  },
  {
    focus: "Strength",
    name: "Barbell Incline Chest Press",
    bodypart: "Chest",
    description: "Lean back on an incline bench at about 30 to 45 degrees. Your feet need flat on the floor giving yourself a good sturdy base. Lower back is flat against the bench. Arch your back slightly during this lift. Take hold of the bar with a medium-wide grip. When you have the bar off the rack, do not start down immediately with it. Raise the bar off the rack and hold it right above your head arms locked. Like with the bench press, hold it at the top for just a second and get oriented. Start down with the weight slowly, touch the muscles directly underneath the point that the clavicles meet; basically the upper chest or top of the chin. Pause for a brief moment so you don't bounce the weight off your chest, then press it back up to the top position, exhaling on the way up. Do not touch the nipple area.",
    image: "scripts/Images/Incline-Barbell-Bench-Press.png",
    scale: "light, weight, just the bar, Push-Up(Feet on a Bench)"
  },
  {
    focus: "Strength",
    name: "Dumbbell Chest Press",
    bodypart: "Chest",
    description: "Lie back on a flat bench with your feet flat on the floor. Grasp the Dumbells with your hands just outside shoulder width, press the Dumbbells off the chest straight up, and Dumbells back down and repeat.",
    image: "scripts/Images/flat-dumbbell-bench-press.jpg",
    scale: "Floor Press, Push-Up"
  },
  {
    focus: "Strength",
    name: "Dumbbell Chest Flies",
    bodypart: "Chest",
    description: "Lie back on a flat bench (you can also do this laying on the ground, as is shown above), holding a pair of dumbbells at arm’s length over your chest, palms facing each other. (If this is your first time, select dumbbells that weigh about half of what you would use for presses).Keeping your elbows slightly bent, slowly lower the dumbbells directly out to your sides until you feel a deep stretch in your chest. Pause, then slowly reverse the move, returning to the starting position.",
    image: "scripts/Images/DB Chest Fly.jpeg",
    scale: "Floor Chest Flies"
  },
  {
    focus: "Strength",
    name: "Dumbbell Incline Chest Press",
    bodypart: "Chest",
    description: "Lean back on an incline bench at about 30 to 45 degrees. Your feet need flat on the floor giving yourself a good sturdy base. Lower back is flat against the bench. Arch your back slightly during this lift. Take hold of the Dumbbells as you lay back. Do not start down immediately with it. Hold Dumbbelss arms locked. Like with the bench press, hold it at the top for just a second and get oriented. Start down with the weight slowly, touch the muscles directly underneath the point that the clavicles meet; basically the upper chest or top of the chin. Pause for a brief moment so you don't bounce the weight off your chest, then press it back up to the top position, exhaling on the way up.",
    image: "scripts/Images/dumbbell-incline-bench-press.jpg",
    scale: "Push-Up(Feet Elevated)"
  },
  {
    focus: "Strength",
    name: "Push-Up",
    bodypart: "Chest",
    description: "An exercise in which a person lying face down, with the hands under the shoulders, raises the torso and, often, the knees off the ground by pushing down with the palms: push-ups are usually done in a series by alternately straightening and bending the arms.",
    image: "scripts/Images/push-up.jpg",
    scale: "Elevated Push-Up on (Hands on Bench or Bar in rack)"
  },
  {
    focus: "Strength",
    name: "Barbell Bent-Over Row",
    bodypart: "Back",
    description: "Grip the barbell with a grip that’s similar in width to your deadlift, or slightly wider. Once you’ve established your grip, lift the bar off the ground and bend over maintaining a strong set back and hip hinge. Once your stance, grip, and back/hip angle are established, then it’s time to initiate the row. When beginning the pull, think about bringing the elbows back as if you’re starting a lawnmower, and focus on utilizing the latissimus dorsi to move the weight. At the top of the movement, squeeze the full upper back and contract the lats without breaking your hip angle and set back. Think about pulling the barbell fully to the body to ensure you’re fully contracting the upper torso’s musculature. ",
    image: " ",
    scale: "Suspension Trainer Row, Dumbell Row"
  },
  {
    focus: "Strength",
    name: "Single Arm DB Row",
    bodypart: "Back",
    description: "Using a Bench for stability, with a Dumbbell(DB) in one hand all the arm to straighten while keeping a tight core and good postusural alignment to rounding the upper back, no arching the lower back, straight arm and pause before retracting the should blade and pulling the DB up the side and retracting the shoulder blade completely slowly and under control. Lower the weight under control and repeat for desired reps.",
    image: " ",
    scale: "Single Arm(SA) Band Row, Suspension Trainer Row"
  },
  {
    focus: "Strength",
    name: "Lat-Pull Dowm",
    bodypart: "Back",
    description: "Arms are outside of shoulder width apart, keep shoulders relaxed, depress and retact the shoulder blades as we pull the bar to our chest, pause and then return to starting position.",
    image: " ",
    scale: "Banded Lat Pull Down, Standing Lat Pull Down"
  },
  {
    focus: "Strength",
    name: "Suspension Trainer Row",
    bodypart: "Back",
    description: "With a Handle or Ring in Each Hand, Slowly lower yourself back if as if you were in an upside down plank. The closer to parallel with the ceiling the harder the row. Retract the shoulder blades, start to bend the elbows as you pull yourself to standing, hhands endeing up just outside the armpits.",
    image: " ",
    scale: "Banded Row"
  },
  {
    focus: "Strength",
    name: "Seated Row",
    bodypart: "Back",
    description: "Please Follow Machien Instructions",
    image: " ",
    scale: "Weight"
  },
  {
    focus: "Strength",
    name: "Pull-Up",
    bodypart: "Back",
    description: "Grab a bar with a grip slightly wider than shoulder-width, with your hands facing away from you.Hang all the way down.Pull yourself up until your chin is above the bar. Slight pause Lower yourself all the way back down.",
    image: " ",
    scale: "Assisted Pull-Up, Lat-Pull Down"
  },
  {
    focus: "Strength",
    name: "Plank",
    bodypart: "Core",
    description: "Begin on all fours (hands and knees) with your hands on the floor directly underneath your shoulders about shoulder-width distance apart. Lift up off of your knees by completely extending your legs behind you. Tuck your toes under so that your entire body is lifted up off the ground, supported by your arms and legs. This his high plank position and one variation of the plank exercise. To do a forearm plank (slightly more challenging), simply lower down onto your forearms, slowly and with one arm at a time. Be sure to keep your shoulders above your elbows",
    image: " ",
    scale: "Elevated Plank"
  },
  {
    focus: "Strength",
    name: "Glute Bridge",
    bodypart: "Core",
    description: "Lie flat on the floor on your back. Place your hands by your side and bend your knees. Your feet should be shoulder width apart. This is the starting position. Push with your hips and lift them off the floor. Keep your back straight. Exhale as you perform this part of the exercise and hold it at the top for a second. Slowly move your hips back to the starting position as you breathe in.",
    image: " ",
    scale: "Banded Hip Extesnion"
  },
  {
    focus: "Strength",
    name: "Sit-Up",
    bodypart: "Core",
    description: "",
    image: "Lie down on your back. Bend your legs and place feet firmly on the ground to stabilise your lower body. Cross your hands to opposite shoulders over your chest or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift Slowly, lower yourself down, returning to your starting point. Inhale as you lower.",
    scale: "Plank, Elevated Plank, Hollow Hold"
  },
  {
    focus: "Strength",
    name: "Side Plank",
    bodypart: "Chest",
    description: "Lie on your side with your elbow straight underneath your shoulder Legs are out straight, top foot is in front of bottom foot. To modify bend your knees. Start tall on your shoulder. As you lift up, bring your hips forward so your body is in a straight line. Pretend your elbow is on a rag on a slippery hardwood floor. It should not slide out away from you. Keep your head back in line with your body. Pretend you have headlights on both your hips and shoulders. They should face straight ahead and point straight across the room to the same location. ",
    image: "",
    scale: "Side Plank on Forearm"
  },
  {
    focus: "Strength",
    name: "Pallof-Press",
    bodypart: "Core",
    description: "Start by attaching a resistance band to a fixed anchor or rig, at chest height, making sure to maintain tension on the band at all times. Set your body so that it is perpendicular to the band, so that your fingers are interlocked with the hands out in front of you. Step away from the anchor point so that there is tension on the band. With the hands both clasping the handle/band, press the fists into the sternum and squeeze the shoulder-blades together. While keeping the abs pulled in, lower back flat, and shoulder-blades depressed and retraced, slowly pull the band into the body, and maintain the shoulders close to the body. The Pallof press can be done for slow, tempo like reps, pause reps/holds, or higher repetitions.",
    image: "",
    scale: "Can be done banded or on a cable machine"
  },
  {
    focus: "Strength",
    name: "Bird-Dog",
    bodypart: "Core",
    description: "Begin on all fours in the tabletop position. Place your knees under your hips and your hands under your shoulders. Maintain a neutral spine by engaging your abdominal muscles. Draw your shoulder blades together. Raise your right arm and left leg, keeping your shoulders and hips parallel to the floor. Lengthen the back of your neck and tuck your chin into your chest to gaze down at the floor. Hold this position for a few seconds, then lower back down to the starting position. Raise your left arm and right leg, holding this position for a few seconds. Return to the starting position. This is one round.",
    image: " ",
    scale: " "
  },
  {
    focus: "Strength",
    name: "Prone Cobra",
    bodypart: "Core",
    description: "Lie face down on the ground with your arms out to your sides making a T-shape with your body. During the entire motion keep your fingers spread wide, glutes activated and balls of your feet kicked into the ground; raising your knees.With a neutral head position, begin by raising your torso as high as possible while externally rotating your palms upward (thumbs pointing up). Think of pulling your shoulder blades back down towards your glutes and thumbs together behind you. Hold the top position for two seconds and then slowly return to the start position. Do not fully relax to the floor and repeat",
    image: "",
    scale: "Wall Cobra, superman, banded Pull-Aparts"
  },
  {
    focus: "Strength",
    name: "Single-Leg Raises",
    bodypart: "Core",
    description: "Lie on your back with your hips square and your legs laid out comfortably on the floor. Bend the knee of your non-injured leg at a 90-degree angle, planting the foot flatly on the floor. Stabilize the muscles on your straight leg by contracting your quadriceps (the group of muscles on the front of your thigh).Inhaling slowly, lift the straight leg six inches off the ground.Hold for three seconds. Exhaling slowly, lower the leg to the floor with control",
    image: " ",
    scale: " "
  },
  {
    focus: "Strength",
    name: "Toes to Bar",
    bodypart: "Core",
    description: "Position yourself beneath the bar and reach up and grab it. Your feet should be dangling at least a few feet off the ground in order to provide enough clearance for your feet to swing freely. Bring your legs directly up and crunch using your abdominals as you bring your feet all the way to the top in order to touch your toes to the bar. Slowly lower your legs back down to the starting position and repeat for your desired number of repetitions. This normal version of the toes to bar exercise is more strict than the easier version in that it bans the use of kipping. This makes things more difficult as it requires you to use more muscles, particularly the increased engagement of the core muscles of the abdominals and lower back in order to raise the toes all the way up to the bar.",
    image: " ",
    scale: " "
  },
  {
    focus: "Strength",
    name: "Banded-Pull Aparts",
    bodypart: "Core",
    description: "Start with one of with a band of lighter tension. Contract your abs. (This brings your ribs closer to your pelvis eliminating back extension.) Arms, elbows, and wrists are straight and fully extended in front of you. Protract your shoulder blades. (Reach as far forward with your arms as you can.) With your arms parallel to the floor, palms facing up, and your shoulders protracted,  slowly pull the band apart by extending your arms to either side of your body. When the band hits your chest make an effort to pull it through your body. Hold the fully contracted position for 2 seconds, then return to the starting position.Repeat for prescribed sets and reps.",
    image: "",
    scale: "Wall Cobra"
  },
  {
    focus: "Strength",
    name: "Superman",
    bodypart: "Core",
    description: "Lay face down on a mat or flat surface, with arms outstretched. Keep your hands and arms straight throughout the exercise.Raise your hand and legs 4-5 inches off the ground. Hold for 5 seconds, then return to starting position",
    image: " ",
    scale: "Wall Cobra, Banded Pull Aparts"
  },
  {
    focus: "Strength",
    name: "Strict Press",
    bodypart: "Shoulders",
    description: "Stand with heels underneath your hips, legs locked out. Hands outside the shoulder with a full grip, elbows slightly in front of the bar. Begin with the bar racked on the front on the shoulders, belly tight.With a tight and rigid body, press the bar straight up while moving your head back and out of the way. Knees come to full lock out at the top. Arms come to full lockout overhead with the bar over the center of the body. Rep is completed when the elbows, hips, and knees are all fully locked out with the bar overhead",
    image: " ",
    scale: "Dumbbell Strict Press"
  },
  {
    focus: "Strength",
    name: "Push Press",
    bodypart: "Shoulders",
    description: "Grab a barbell and hold it with a grip that is a little less than shoulder-width apart. Pull the barbell just above shoulders with elbows close to your body. Bend your knees and lower your body in to a half-squat position. Press the weight over your head as you press through the heels to explosively stand up. Pause and slowly lower the bar back down to the starting position.",
    image: " ",
    scale: "Strict Press, Seated Dumbbell Shoulder Press"
  },
  {
    focus: "Strength",
    name: "Push Jerk",
    bodypart: "Shoulders",
    description: "Place the barbell in a rack position that is at a similar height as your collarbone and take a shoulder width stance with your feet.Grip the barbell in a position that is located on the heel of your palms with your hands just outside the shoulders. Use an overhand grip on the barbell. This will be the starting position. Slightly bend your knees a few inches while you dip down into a modified squat position. Open the legs and hips while you drive up in an explosive motion to lift the bar into an overhead press position. Your arms should be perpendicular to the bar with your feet apart. Hold the barbell above your head with your arms extended. This is the top position of the push jerk. Slowly lower the barbell back down in a controlled fashion to complete a full repetition.",
    image: "",
    scale: "Push Press, Strict Press"
  },
  {
    focus: "Strength",
    name: "Seated Dumbbell Shoulder Press",
    bodypart: "Shoulders",
    description: "Start by holding each dumbbell in a hand at your shoulder height using a pronated grip. You want your elbows pointed downward and to the sides. In this ready position, inhale before you press.Now, while exhaling drive both dumbbells overhead in a slight arc until your elbows are fully extended. You don’t need to look up and shouldn’t look down. A good practice is to keep the head upright and in a neutral position. It is best if there is a mirror in front of you, then you can monitor and correct your form. Be careful not to clang the dumbbells together. Additionally, do not lock your elbows out (this will keep tension on the deltoids). Finally, slowly lower the dumbbells to the starting position, and remember to inhale on the way down.",
    image: "",
    scale: "Lateral Dumbbell Raise, Front Dumbbell Raise"
  },
  {
    focus: "Strength",
    name: "Lateral Dummbell Raises",
    bodypart: "Shoulders",
    description: "",
    image: "Standing in a shoulder-width stance, grab a pair of dumbbells with palms facing inward and let them hang at your sides. Raise your arms out to the sides until they're at shoulder level. Pause, then lower the weights back to the starting position. ",
    scale: "Banded Side Raise"
  },
  {
    focus: "Strength",
    name: "Front Dumbbell Raises",
    bodypart: "Shoulders",
    description: "Stand tall with your feet hip-width apart. Hold a dumbbell in each hand in front of your thighs. Your palms should face toward you. Raise your arms up in front of you. Pause when the dumbbells reach shoulder height. Then slowly return the weights to the starting position.",
    image: " ",
    scale: "Banded Front Raise"
  },
  {
    focus: "Strength",
    name: "Barbell Shrug",
    bodypart: "Shoulders",
    description: "Standing with your feet shoulder-width apart, place a barbell in front of your thighs, hands shoulder-width apart, palms facing your body, and arms fully extended. Keeping your arms straight, shrug your shoulders as high as you can. Pause, then lower to the start position.",
    image: " ",
    scale: " "
  },
  {
    focus: "Strength",
    name: "Reverse Dumbbell Fly's",
    bodypart: "Shoulders",
    description: "Select the desired weight from the rack then take a few steps back into an open area. Hinge from the hips until your body is almost parallel to the floor and allow the arms to hang straight down from the shoulders with a neutral grip. Take a deep breath and pull the dumbbells towards the ceiling using the rear deltoids. Slowly lower the dumbbells back to the starting position under control. ",
    image: " ",
    scale: " Cable Reverse Fly's "
  },
  {
    focus: "Strength",
    name: "Barbell Back Squat",
    bodypart: "Legs",
    description: "Stand with the bar on your upper-back, and your feet shoulder-width apart. Squat down by pushing your knees to the side while moving hips back. Break parallel by Squatting down until your hips are lower than your knees. Squat back up while keeping your knees out and chest up. Stand with your hips and knees locked at the top",
    image: " ",
    scale: "Suspension Trainer Squat, Box Squat, Step-Ups, Leg Press"
  },
  {
    focus: "Strength",
    name: "Barbell Front Squat",
    bodypart: "Legs",
    description: "Assume a proper front rack position by placing the barbell high up onto the shoulders, ensuring the bar is supported with the shoulders and upper chest (above the sternum). The posture should be tall with the elbows up and core tight. Note: This isn’t very comfortable, so don’t be worried if it smurfs a little. That’s just is what it is. With the barbell resting in the front rack position, descend into a squat keeping the pelvis neutral and the chest up. Minimize forward lean of the torso, which will force greater loading on the quadriceps. Once you have hit the bottom position in the front squat, push through the full foot and stand up, maintaining an upright torso, chest, and elbow positioning. Keep the knees out and forward over the toes, allowing the torso to remain vertical rather than allowing the hips to push backward excessively. This will help keep the torso vertical and the quadriceps engaged.",
    image: " ",
    scale: "Goblet Squat, Suspension Trainer Squat"
  },
  {
    focus: "Strength",
    name: "Barbell Deadlift",
    bodypart: "Legs",
    description: "Bend at hips and knees, and grab a loaded barbell with an overhand grip about twice as wide as shoulder-width.Without allowing your lower back to round, stand up and thrust your hips forward as you squeeze your glutes and the keep the bar close to the body. Pause, then lower the bar back to the floor while keeping it as close to your body as possible.",
    image: "",
    scale: "Leg Curl, Trap Bar Deadlift, Banded Good Morning"
  },
  {
    focus: "Strength",
    name: "Step-Up",
    bodypart: "Legs",
    description: "Choose a comfortable height, for most people 12-24in with work. Step the entire foot onto the box driving through the heel steping up and bring the other foot onto the box, step down safely (add an inbetween step if needed), switch legs.",
    image: " ",
    scale: "Leg Extension, Leg Press"
  },
  {
    focus: "Strength",
    name: "KettleBell Swing",
    bodypart: "Legs",
    description: " Stand with your feet shoulder-width apart with a kettlebell about a foot in front of you on the ground. Bend at the waist and grasp the kettlebell handle with both hands. Your palms should be facing your body, and your torso should be nearly parallel to the ground. Pull your shoulders down and back and brace your core before starting the exercise. Maintain these form cues throughout the entire set. Lift the kettlebell off the ground and allow it to swing between your legs. Your knees should bend slightly during this movement. Keep your back flat and neck straight. Forcefully drive your hips forward to propel the kettlebell into the air. Control the kettlebell with your arms, but don't pull it up. The kettlebell should travel no higher than your shoulders. Allow the kettlebell to swing down and back through your legs. Control the descent by keeping your core engaged. As the kettlebell lowers, move immediately and fluidly into the next rep.",
    image: "",
    scale: "KB Hip Hinge, Banded Good Morning"
  },
  {
    focus: "Strength",
    name: "Forward Lunge",
    bodypart: "Legs",
    description: "Stand tall with feet hip-width apart. Engage your core. Take a big step forward with right leg. Start to shift your weight forward so heel hits the floor first. Lower your body until right thigh is parallel to the floor and right shin is vertical. It’s OK if knee shifts forward a little as long as it doesn’t go past right toe. If mobility allows, lightly tap left knee to the floor while keeping weight in right heel. Press into right heel to drive back up to starting position. Repeat on the other side.",
    image: "",
    scale: "Split Squat, Bodyweight Squat"
  },
  {
    focus: "Strength",
    name: "Reverse Lunge",
    bodypart: "Shoulders",
    description: "A reverse lunge is exactly the same as a forward lunge done backwards, and you’d be more or less right. Start by standing straight and bracing your core muscles. Then take a giant step backwards with your left foot. Bend your right knee until it’s at 90°, and lower your left knee until it is also bent at a right angle. Then push back up and return to the starting position. Make sure you keep your torso upright throughout the movement. You can opt to alternate legs with your reps, or do all of them on one leg before switching to the other.",
    image: "",
    scale: "Suspension Trainer Reverse Lunge"
  },
  {
    focus: "Strength",
    name: "Side Lunge",
    bodypart: "Legs",
    description: "With a barbell behind your shoulders, stand straight with your feet placed wide apart and facing forward. Keeping your back straight and breathing in, angle your right foot out to the side and then slowly lunge, or squat, to the right side by bending your knee until it is over your foot. Extending your right leg and breathing out, return to a standing position. Repeat with the left leg.",
    image: "",
    scale: "Bodyweight Cossack Squats"
  },
  {
    focus: "Strength",
    name: "Sumo Deadlift",
    bodypart: "Legs",
    description: "Start by assuming a wide stance with the toes slightly pointed out. The stance itself should be wide enough to allow the arms to be extended downwards, inside the knees (elbows inside the knees). The stance width will vary from person to person. However, generally speaking, the width should allow for the athlete to have the shins perpendicular to the floor with the back flat and shoulders directly above the bar. Once you’re in position, start to tighten your core, back, legs, and butt to create a feeling of full-body tension. Slightly pull up the bar and press the legs through the floor (without moving the bar yet). Once you have found your best tension position, take one more breath, and then proceed to step three. The key here is not to allow the chest to fall or the hips to rise in the pull, but rather to have the barbell stay close to the body as you stand up. Press through your heels, keeping your hips and chest in position, and drive through your legs. At this point, the weight should be ascending your legs. You may feel the bar start to pull you down or stop moving altogether. Try not to let your chest fall forward or upper back round. Keep pushing through your heels and then squeeze your glutes to inch the bar to hip level.",
    image: "",
    scale: "Kettlebell Sumo Deadlift, Sumo Squat"
  },
  {
    focus: "Strength",
    name: "Clean*",
    bodypart: "Multiple",
    description: "Begin with the bar on the floor positioned close to your shins over your shoelaces. Stand with your feet hip-width apart, reach down and grab the bar with an overhand, shoulder-width grip. Sit your butt down and stick your chest up. Pull your shoulder blades down and back and tighten your core. Your elbows should be rotated out to the sides with your arms completely straight. Look straight ahead. Pull the bar off the floor by powerfully extending your legs, making sure to keep your back flat and your chest up.  The bar should travel vertically in a straight line, not into you like during a Deadlift. Once the bar is above your knees, shift your torso to a vertical position and rebend your knees slightly. This is the scoop Now initiate the second pull—the most powerful portion of the movement—by violently jumping straight up, fully extending your hips, knees and ankles (triple extension), while simultaneously shrugging the bar with your shoulders. Keep the bar as close to your body as possible. Quickly drop into a quarter-squat position with your back straight, and hips and knees slightly bent. Drive your elbows forward to rotate them around in the bar and catch the bar in the racked position across the front of your shoulders with your fingertips under the bar. Now stand up.",
    image: "",
    scale: "Dumbell Clean *This exercise should not be performed without proper coaching"
  },
  {
    focus: "Strength",
    name: "Snatch*",
    bodypart: "Multiple",
    description: "Grab a barbell with a wider than shoulder-width overhand grip, your hips and knees slightly bent and your back flat. Pushing your feet into the floor, pull the barbell up to rest just above your knees. Extending your knees and thrusting your hips, explosively drive the barbell toward the ceiling. Shrug your shoulders at the same time, creating momentum to propel the barbell upward.Extend your arms over your head and lock your elbows as you drop your hips to place your body underneath the bar. Push your feet into the floor and extend your hips to stand. Reverse the movement to return to the starting position.",
    image: "",
    scale: "Dumbell Snatch *This exercise should not be performed without proper coaching"
  },
  {
    focus: "Strength",
    name: "Clean and Jerk*",
    bodypart: "Multiple",
    description: "",
    image: "",
    scale: "Dumbbell Clea and Jerk *This exercise should not be performed without proper coaching"
  },
  {
    focus: "Strength",
    name: "Squat to Curl and Press",
    bodypart: "Multiple",
    description: "Start with your feet shoulder width apart and the weights in each hand on the side of your body standing straight up. Drop down into a squat motion and on your way up from the squat curl the dumbbells to your shoulders. Press the weight over your head with your palms facing forward. Bring the weight back down to your waste. This completes one repetition.",
    image: "",
    scale: "Squat to Bench Curl Press"
  },
  {
    focus: "Strength",
    name: "Dumbbell Bicep Curls",
    bodypart: "Arms",
    description: "Stand up and hold a dumbbell in each hand. Turn the palms of your hands until they are facing forward. This is the starting position. While keeping your upper arms stationary, curl the dumbbells while contracting your biceps. Keep raising the weights until your biceps are fully contracted. The dumbbells should be at shoulder level. Hold this position briefly and squeeze your biceps. Slowly lower the dumbbells back to the starting position, inhaling as you do so.",
    image: " ",
    scale: "Banded Curls, Seated Curls "
  },
  {
    focus: "Strength",
    name: "Dumbbell Hammer Curls",
    bodypart: "Arms",
    description: "same as bicep curls, just have a neutral writes (make a fist, turn it so your thumb is towards the ceiling, boom hammer curl!",
    image: "",
    scale: "Banded Hammer Curls, Banded Seated Curls"
  },
  {
    focus: "Strength",
    name: "Flat Bar Curl",
    bodypart: "Arms",
    description: "Same as a curl but with a long flat bar! Can also do this on a curl bar!",
    image: "",
    scale: "Standing Bicep Curl"
  },
  {
    focus: "Strength",
    name: " Dumbbell Tricep Extension",
    bodypart: "Arms",
    description: "Lie down on a flat bench and hold two dumbbells directly in front of you. Extend your arms at a 90-degree angle from your torso. Your palms should be facing in and your elbows should be tucked in close to your body. This is your starting position. Lower the dumbbells slowly until they are positioned near your ears. Inhale as you do so, keeping your upper arms stationary. Use your triceps to bring the weight up to the starting position. Exhale as you perform this part of the exercise.",
    image: "",
    scale: "Banded Tricep Extension"
  },
  {
    focus: "Strength",
    name: "Tricep Kick Backs",
    bodypart: "Arms",
    description: "Stand with your knees bent and lean forward slightly, with a dumbbell in each hand. Keeping your back straight, bend your dumbell-holding arm 90 degrees at the elbow so your triceps are aligned with your back and your biceps are perpendicular to the floor. Engage your core and your triceps and hinge at the elbow, lifting the dumbbell up and back as you try and straighten your arm. Your triceps should stay still; only your elbow moves. Guide the weight upward until your arm is straight, pause, then lower back to 90 degrees. That's one rep.",
    image: "",
    scale: "Tricep Extension"
  },
  {
    focus: "Strength",
    name: "Tricep Push Downs",
    bodypart: "Arms",
    description: "Start by bracing your abdominals.Tuck your elbows in at your sides and position your feet slightly apart.Inhale. Push down until your elbows are fully extended but not yet in the straight, locked position. Keep your elbows close to your body and bend your knees slightly on the pushdown. Resist bending forward. Try to keep your back as straight as possible as you push down. As you exhale, return to the starting point using a controlled movement.",
    image: "",
    scale: "Can be performed various ways"
  },
  {
    focus: "Strength",
    name: "Close Grip Barbell Press",
    bodypart: "Arms",
    description: "Lie flat on a bench and set your hands at shoulder width. Set your shoulder blades by pinching them together and driving them into the bench. Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back. Let the weight settle and ensure your upper back remains tight after lift off.Inhale and allow the bar to descend slowly by unlocking the elbows. Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest. Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.",
    image: "",
    scale: "Close Grip Push-up, Torso-Elevated Close-Grip Push-up"
  },
  {
    focus: "Cardio",
    name: "Running",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Running",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Rowing",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Air Bike",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Spin Bike",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Ski-Erg",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Walking",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Jogging",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Swimming",
    bodypart: "Multiple",
    description: "Please Do not swim in dangerous conditions or if you are not a trained swimmer. Always tell a friend if you are swimming alone in open water.",
    image: "",
    scale: ""
  },
  {
    focus: "Cardio",
    name: "Elliptical",
    bodypart: "Multiple",
    description: "If using a Treadmill, Elliptical or Bike, please follow all machine instructions",
    image: "",
    scale: ""
  },
  

];

db2.Exercise
  .remove({})
  .then(() => db2.Exercise.collection.insertMany(exerciseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  let workoutSeed = [
    {
      day: new Date().setDate(new Date().getDate()-10),
      exercises: [
        {
          type: "resistance",
          name: "Bicep Curl",
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-9),
      exercises: [
        {
          type: "resistance",
          name: "Lateral Pull",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-8),
      exercises: [
        {
          type: "resistance",
          name: "Push Press",
          duration: 25,
          weight: 185,
          reps: 8,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-7),
      exercises: [
        {
          type: "cardio",
          name: "Running",
          duration: 25,
          distance: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-6),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 285,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-5),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 4)),
      exercises: [
        {
          type: "resistance",
          name: "Quad Press",
          duration: 30,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 3)),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 2)),
      exercises: [
        {
          type: "resistance",
          name: "Military Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    }
  ];
  
  db3.Workout.deleteMany({})
    .then(() => db3.Workout.collection.insertMany(workoutSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });