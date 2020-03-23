import React from "react";
import styled from "styled-components";

export default function PatternOne(props) {
  return (
    <div>
      <h1>DIY Hospital mask</h1>
      <p>
        Thanks to @marklewismd on Twitter for his great instructions on
        constructing a mask with elastic earloops and a pocket to slide in a
        filter.
      </p>
      <p>See the original tweet here:</p>
      <a
        href="https://twitter.com/marklewismd/status/1240850124273672197?s=20"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://twitter.com/marklewismd/status/1240850124273672197?s=20
      </a>
      <StepContainer>
        <h3>Step 1</h3>
        <p>
          They used 100% cotton fabric and cut one 9”x8” rectangle and one 9”x7”
          rectangle, as well as cutting a pipe cleaner to 6”.
        </p>
        <img
          src="/static/img/step1.jpg"
          alt="A cut piece of cloth laying over a cutting board."
        />
      </StepContainer>
      <StepContainer>
        <h3>Step 2</h3>
        <p>
          Then they applied HeatnBond (soft stretch variety) in an 8” strip
          centered over the larger rectangle.
        </p>
        <img
          src="/static/img/step2.jpg"
          alt="A strip of HeatnBond being ironed on to the fabric"
        />
      </StepContainer>
      <StepContainer>
        <h3>Step 3</h3>
        <p>
          Then they rolled the pipe cleaner in the fabric to encase it and
          create the top of the mask that will conform to the nasal bridge &
          cheeks
        </p>
        <img
          src="/static/img/step3.jpg"
          alt="The pipe cleaner is being rolled into the fabric"
        />
      </StepContainer>
      <StepContainer>
        <h3>Step 4</h3>
        <p>Then they took the 9”x7” rectangle and sewed a seam at the top.</p>
        <p>
          In order to create a pocket into which a filter can be inserted (or
          procedure mask to prolong its life) they laid the outer sides of the
          rectangles (i.e. the sides without the folded edges) together
        </p>
        <img
          src="/static/img/step4.jpg"
          alt="Fabric being sewn together in a sewing machine"
        />
      </StepContainer>
      <StepContainer>
        <h3>Step 5</h3>
        <p>
          They sewed the rectangles together on 3 sides: left, right, bottom
          (deliberately leaving the top open for filter insertion)
        </p>
        <p>
          On the bottom seam do not sew all the way to the edge to leave a
          channel for elastic (see next step)
        </p>
        <img src="/static/img/step5.jpg" alt="The completed fabric pouch" />
      </StepContainer>
      <StepContainer>
        <h3>Step 6</h3>
        <p>
          At this point an inside-out pocket has been created and needs to be
          inverted
        </p>
        <p>
          On the left and right sides of the pocket another row of stitches is
          needed at least 1/4” from the original seam to create a channel for
          quarter-inch elastic.
        </p>
        <p>
          For S/M-sized masks use 10.25” length of quarter-inch-width elastic
        </p>
        <p>
          For M/L-sizes use 11.25-12” lengths In order to feed through channel
        </p>
        <p>attach a safety pin at one end of the elastic </p>
        <img src="/static/img/step6.jpg" alt="Elastic attached to the pouch" />
      </StepContainer>
      <StepContainer>
        <h3>Step 7</h3>
        <p>
          They then hand-stitched each end of the elastic together to create an
          ear loop (allowing ~1/4” overlap for stretch)
        </p>
        <img
          src="/static/img/step7.jpg"
          alt="A close up of the elastic attached to the pouch"
        />
      </StepContainer>
      <StepContainer>
        <h3>Step 8</h3>
        <p>
          In the final product there is now a pocket for insertion of materials
          (e.g. procedure masks to prolong their use). While not rigorously
          studied other filters (non-woven fabrics) may be used also.
        </p>
        <img
          src="/static/img/step8.jpg"
          alt="The finished mask; pocket open and earloops visible."
        />
      </StepContainer>
      <StepContainer>
        <h3>Final</h3>
        <p>
          There are other patterns and YouTube videos re: facemask construction,
          but my wife as a physician aimed for a design that is as air-tight as
          possible given the spread of #coronavirus by droplets
        </p>
        <DoubleUpImageContainer>
          <img
            src="/static/img/step9.jpg"
            alt="A front view of a woman wearing the mask"
          />
          <img
            src="/static/img/step10.jpg"
            alt="A side view of a woman wearing the mask"
          />
        </DoubleUpImageContainer>
      </StepContainer>
    </div>
  );
}

const StepContainer = styled.div`
  margin: 28px;
`;

const DoubleUpImageContainer = styled.div`
  display: flex;
  img {
    max-width: 50%;
  }
`;
