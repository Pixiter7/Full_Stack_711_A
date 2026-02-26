document.querySelectorAll(".apply-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Applied \u2713";
        button.disabled = true;
    });
});
document.querySelectorAll(".apply-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Applied ✓";
        button.disabled = true;
    });
});
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const jobs = document.querySelectorAll(".job-listing");

function searchJobs() {

    let filter = searchInput.value.toLowerCase();

    jobs.forEach(job => {

        let jobText = job.innerText.toLowerCase();

        if (jobText.includes(filter)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}
// searchBtn.addEventListener("click", searchJobs);
searchInput.addEventListener("keyup", searchJobs);