import { workExperience } from "./js/dummyData.js";
console.log("🚀 ~ workExperience:", workExperience);

const workExperienceTag = document.getElementById("work-experience-content");
console.log("🚀 ~ workExperienceTag:", workExperienceTag);

function renderWorkExperience() {
  workExperienceTag.innerHTML = workExperience
    .map((experience) => {
      // Format dates to show only month and year
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        });
      };

      return `
            <div class="md:w-1/2 work-experience-item">
                    <div class="card-header">
                        <img
                            src="${experience.logo}"
                            alt="${experience.companyName} logo"
                            height="96"
                            class="w-32 h-32 !mb-6 object-cover" />
                        <h3 class="font-bold">${experience.companyName}</h3>
                        <h4 class="font-bold">${formatDate(
                          experience.startDate
                        )} - ${formatDate(experience.endDate)}</h4>
                    </div>
                    <div class="!mt-2 card-body">
                        <div class="!mt-2 work-experience-detail">
                            <p>My Work Included:</p>
                            <ul class="list-disc list-inside">
                             ${experience.jobDescription
                               .map((item) => `<li>${item}</li>`)
                               .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
    })
    .join("");
}

renderWorkExperience();
