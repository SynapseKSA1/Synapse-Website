
        document.addEventListener('DOMContentLoaded', function() {
            if (window.location.hash) {
                setTimeout(function() {
                    const targetElement = document.querySelector(window.location.hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        
            document.querySelectorAll('a[href*="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.includes('index.html#')) {
                        const targetId = href.split('#')[1];
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            e.preventDefault();
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
        });
        


        // للانتقال السلس
        document.addEventListener('DOMContentLoaded', function() {
            // التحقق إذا كان هناك هاش في الرابط
            if (window.location.hash) {
                // الانتظار قليلاً قبل الانتقال
                setTimeout(function() {
                    const targetElement = document.querySelector(window.location.hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        
            // إضافة المستمع لكل الروابط التي تحتوي على هاش
            document.querySelectorAll('a[href*="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    // التحقق من أن الرابط في نفس الصفحة
                    if (this.href.includes(window.location.pathname)) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href').split('#')[1];
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
        });
        


      const teamMembers = [
        // مجلس الإدارة
        {
          name: "ليان محمد الجهني",
          title: "رئيس مجلس الإدارة",
          department: "مجلس الإدارة",
          isFounder: true,  // أضف هذا السطر للمؤسسين
          linkedin:
            "https://www.linkedin.com/in/layan-aljohani-348447207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "ريان نزار بشاوري",
          title: "نائب رئيس مجلس الإدارة | مستشار",
          departments: ["مجلس الإدارة", "اللجنة الاستشارية"],

          isFounder: true,  // أضف هذا السطر للمؤسسين
          linkedin:
            "https://www.linkedin.com/in/rayan-beshawri/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "اريج احمد شويل",
          title: "الرئيس التنفيذي |  عضو مجلس الإدارة",
          departments: ["مجلس الإدارة", "الادارة التنفيذية"],
          isFounder: true,  // أضف هذا السطر للمؤسسين

          linkedin:
            "https://www.linkedin.com/in/areej-showail?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "ميار مؤيد حنيف",
          title: "نائب الرئيس التنفيذي |  عضو مجلس الإدارة " ,
          isFounder: true,  // أضف هذا السطر للمؤسسين

          departments: ["مجلس الإدارة", "الادارة التنفيذية"],
           linkedin: "http://linkedin.com/in/mayar-haneef-88b99022b",
        },
       
        {
          name: " سعود عبدالعزيز الرمضاني",
          title: "عضو مجلس الإدارة",
          department: "مجلس الإدارة",
          isFounder: true,  // أضف هذا السطر للمؤسسين
          linkedin:
            "https://www.linkedin.com/in/saud-bin-abdulaziz-25b2b7278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },

        // لجنة التطوير التقني
        {
          name: "خديجة باعثمان",
          title: "مدير التطوير و الابتكار ",
          departments: [ "لجنة التطوير و الابتكار"],
          isFounder: true,  // أضف هذا السطر للمؤسسين
          linkedin: "https://www.linkedin.com/in/khadijah-baothman/",
        },
        {
          name: "حسن برمندة",
          title: "نائب مدير التطوير و الابتكار   ",
          departments: [ "لجنة التطوير و الابتكار"],
          linkedin: "https://scholar.google.com/citations?user=2VzOr0kAAAAJ&hl=en",
        },
        {
          name: "ريناد عبدالله الغامدي",
          title: "رئيس تطوير المواقع ",
          department: "لجنة التطوير و الابتكار",
          linkedin:
            "https://www.linkedin.com/in/renad-alghamdi-621767249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "نوف محمد الجدعاني",
          title: "مطوّر مواقع إلكترونية",
          department: "لجنة التطوير و الابتكار",
          linkedin: "http://linkedin.com/in/nouf-aljedaani-14ba9a284",
        },
        {
          name: "ضي صالح السواط",
          title: "مطوّر مواقع إلكترونية",
          department: "لجنة التطوير و الابتكار",
          linkedin: "https://www.linkedin.com/in/dhay-alsuwat-09555b1bb/",
        },

         {
          name: " صالح زهير عتش ",
          title: "مطوّر مواقع إلكترونية",
          department: "لجنة التطوير و الابتكار",
          linkedin: "https://www.linkedin.com/in/saleh-atash?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      
        {
          name: "رائد عصام أبوحجي",
          title: "رئيس حلول الذكاء الاصطناعي",
          department: "لجنة التطوير و الابتكار",
          linkedin:
            "https://www.linkedin.com/in/raied-abohejji-47b75a134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "أبي ريان بن ابراهيم غلام ",
          title: "أخصائي ذكاء اصطناعي",
          department: "لجنة التطوير و الابتكار",
          linkedin:
            "http://linkedin.com/in/obay-ghulam-55422b25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "عبدالرحمن منصور الغامدي",
          title: "أخصائي ذكاء اصطناعي",
          department: "لجنة التطوير و الابتكار",
          linkedin: "https://www.linkedin.com/in/abdulrhman-alghamdi-fate",
        },
        {
          name: "منار سعد بارفعه",
          title: "أخصائي ذكاء اصطناعي",
          department: "لجنة التطوير و الابتكار",
          linkedin:
            "https://www.linkedin.com/in/manar-barefah-690699301/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },

        {
          name: " إياد عبدالله  الغامدي ",
          title: "أخصائي ذكاء اصطناعي",
          department: "لجنة التطوير و الابتكار",
          linkedin:
            "https://www.linkedin.com/in/eyad-alghamdi-8a9273282/",
        },

        // لجنة الموارد البشرية
        {
          name: "شوق يحيى اهيف",
          title: "مدير الموارد بشرية",
          department: "لجنة الموارد البشرية",
          isFounder: true,  // أضف هذا السطر للمؤسسين
          linkedin: "https://www.linkedin.com/in/shouq-ahyaf-4256b41b1/",
        },
        
        // لجنة إدارة المشاريع
        {
          name: "ريناد حسن المجايشي",
          title: " مدير إدارة المشاريع",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://www.linkedin.com/in/renad-hassan-dataz?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNsPcK1HjSOWohgXrpp%2BAdg%3D%3D",
        },
        {
          name: "انس يحي محمد النويره",
          title: " نائب مدير إدارة المشاريع ",
          department: "لجنة إدارة المشاريع",
          linkedin: "https://www.linkedin.com/in/anas-alnewirah/",
        },
        {
          name: "وائل حبيب نصار الكيانى",
          title: "مدير العلاقات عامة",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://www.linkedin.com/in/waelalkiyani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
       
        {
          name: "عبدالله محمد الغامدي",
          title: "منسق مشاريع",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://linkedin.com/in/abdullah-alghmadi-102364261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        
        {
          name: "نور عبدالله  بامهير",
          title: "منسق مشاريع",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://www.linkedin.com/in/noor-bamuhair-1299a2244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5QFuWMIxS4Cxy9nX4T0wRA%3D%3D",
        },
        {
          name: "شادن عصام العامري ",
          title: "منسق مشاريع",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://www.linkedin.com/in/shaden-alamri-0b6321246/",
        },
        {
          name: " بدر علي الشمراني",
          title: "منسق مشاريع",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://www.linkedin.com/in/bader-alshamrani-49a04a245/",
        },
        {
          name: "رغد العمودي",
          title: "منسق مشاريع",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://www.linkedin.com/in/raghad-alamoudi-75a493279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "زياد علي الشهري",
          title: "مدير إدارة الجودة",
          department: "لجنة إدارة المشاريع",
          linkedin:
            "https://www.linkedin.com/in/raghad-alamoudi-75a493279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        //قسم تطوير المحتوى التقني
        {
          name: "جود ماجد سناري",
          title: " مدير تطوير المحتوى التقني",
          department: "لجنة تطوير المحتوى التقني",
          linkedin:
            "https://www.linkedin.com/in/joud-sanari-97bb5a2b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrWXUoC4sQqGby6Y6Oq%2BtDQ%3D%3D",
        },
        {
          name: "فتون أحمد أبوزيد",
          title: "أخصائي محتوى الذكاء الاصطناعي",
          department: "لجنة تطوير المحتوى التقني",
          linkedin:
            "https://www.linkedin.com/in/futoon-abuzaid-193252283/",
        },
        {
            name: "نادر ناجي الحربي",
            title: "أخصائي محتوى الأمن السيبراني",
            department: "لجنة تطوير المحتوى التقني",
            linkedin: "https://www.linkedin.com/in/nader-alharbi/"
        },
        {
            name: "دانه فايز  القرشي",
            title: "مصمم مرئي",
            department: "لجنة تطوير المحتوى التقني",
            linkedin: "https://www.linkedin.com/in/dana-a-22a5b51aa/"
        },
        {
            name: "نهى اسامه صابر",
            title: "مصمم مرئي",
            department: "لجنة تطوير المحتوى التقني",
            linkedin: "https://www.linkedin.com/in/nuha-saber-189753203/"
        },

        // لجنة التسويق
        {
          name: "اسيل احمد المحمادي",
          title: "مدير التسويق",
          department: "لجنة التسويق",
          isFounder: true,  // أضف هذا السطر للمؤسسين
          linkedin: "http://linkedin.com/in/aseel-almehmadi-302770209",
        },
        {
          name: " أسماء عبدالرحمن حبادي ",
          title: " نائب مدير التسويق",
          department: "لجنة التسويق",
          linkedin: "https://www.linkedin.com/in/asma-habadi/",
        },
        {
          name: "يارا سمير فطاني",
          title: "مدير إبداعي",
          department: "لجنة التسويق",
          //لايوجد لديها حساب
          linkedin: "#",
        },
        {
          name: "فهد محمد الجديبي",
          title: " أخصائي تسويق رقمي",
          department: "لجنة التسويق",
          linkedin: "https://www.linkedin.com/in/fahd-aljudaibi",
        },
      
        {
          name: "رغد نزار بشاوري",
          title: "مصمم جرافيك",
          department: "لجنة التسويق",
          linkedin:
            "https://www.linkedin.com/in/raghad-nizar-318231254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSLA8y0mjQkSP2JbtsiMmHw%3D%3D",
        },
        {
          name: "انوار شرف الثيبيتي",
          title: "مصمم جرافيك",
          department: "لجنة التسويق",
          linkedin: "linkedin.com/in/anwar-althobaiti-0b39532a7",
        },
        
        {
          name: "هديل عبدالهادي سردار",
          title: "أخصائي تسويق رقمي",
          department: "لجنة التسويق",
          linkedin:
            "https://www.linkedin.com/in/hadeel-abdulhadi-a21007255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "فاطمة عبدالكريم المعشي",
          title: "أخصائي تسويق رقمي",
          department: "لجنة التسويق",
          linkedin:
            "https://www.linkedin.com/in/fatima-almaashi-b39694321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },

        {
          name: "بثينة عبدالله القرني",
          title: "كاتب محتوى",
          department: "لجنة التسويق",
          linkedin: "http://linkedin.com/in/bouthainh-algarni-21a0972a1",
        },
        {
          name: "رويدا ال عشقان",
          title: "كاتب محتوى",
          department: "لجنة التسويق",
          linkedin: "linkedin.com/in/رويدا-ال-عشقان-433a8832b",
        },
        {
          name: "وجدان احمد ساموه",
          title: "مصور",
          department: " لجنة التسويق و محرر فيديو",
          linkedin: "https://www.linkedin.com/in/wejdan-samoh/",
        },

        // لجنة الشؤون المالية

        {
          name: "شذى دخيل الله المالكي ",
          title: "المراقب المالي",
          department: "الشؤون المالية",
          isFounder: true,  // أضف هذا السطر للمؤسسين

          linkedin:
            "https://www.linkedin.com/in/shatha-almalki/",
        },
        {
          name: "فهد  الصطامي الشمري ",
          title: "محاسب",
          department: "الشؤون المالية",
          linkedin:
            "https://www.linkedin.com/in/fahad-alshammari-a081b226a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },

        // اللجنة الاستشارية
       
        {
          name: "د. سلطان محمد الأحمري",
          title: "مستشار استراتيجي ",
          department: "اللجنة الاستشارية",
          linkedin:
            "https://www.linkedin.com/in/sahmari1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "د. عبدالله عبدالرحمن العمير",
          title: "مستشار استراتيجي ",
          department: "اللجنة الاستشارية",
          linkedin: "https://www.linkedin.com/in/abdulomair/",
        },
        {
          name: "شذا عبدالله الغامدي",
          title: "مستشار استراتيجي ",
          department: "اللجنة الاستشارية",
          linkedin:
            "https://www.linkedin.com/in/shatha-alowdah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "د. همام الغامدي",
          title: "مستشار استراتيجي ",
          department: "اللجنة الاستشارية",
          linkedin: "linkedin.com/in/hammam-alghamdi-a9910268",
        },


      ].map((member) => ({
        ...member,
        image:
        "Assets/logos/Synapse_G-0٦-removebg-preview.png",
      }));
      const createMemberCard = (member) => {
    const departments = member.departments || [member.department];
    return `
        <div class="profile-card ${member.isFounder ? 'founder-card' : ''}">
            ${member.isFounder ? '<div class="founder-badge"><span>مؤسس</span></div>' : ''}
            <a href="${member.linkedin}" target="_blank" class="linkedin-btn" title="LinkedIn Profile">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <div class="profile-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <h2 class="profile-name">${member.name}</h2>
            <div class="profile-title">${member.title}</div>
            <div class="department-badge">${departments.join(' | ')}</div>
        </div>
    `;
};

const sortTeamMembers = (members) => {
    return [...members].sort((a, b) => {
        // المؤسسين أولاً
        if (a.isFounder && !b.isFounder) return -1;
        if (!a.isFounder && b.isFounder) return 1;
     
    });
};

const updateCards = (filterDepartment = "all") => {
    const grid = document.getElementById("cardsGrid");
    let filteredMembers = teamMembers.filter((member) => {
        const departments = member.departments || [member.department];
        return filterDepartment === "all" || departments.includes(filterDepartment);
    });

    // ترتيب الأعضاء مع وضع المؤسسين في البداية
    filteredMembers = sortTeamMembers(filteredMembers);

    grid.innerHTML = filteredMembers
        .map((member, index) => {
            const card = createMemberCard(member);
            const delay = index * 0.1;
            return `<div class="card-wrapper" style="animation-delay: ${delay}s">${card}</div>`;
        })
        .join("");
};

// إضافة CSS للتأكيد على بطاقات المؤسسين
const styles = `
    .founder-card {
        position: relative;
        transform-origin: center;
        transition: all 0.3s ease;
    }

    
`;

// إضافة styles للصفحة
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// تفعيل الفلترة والترتيب
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            updateCards(btn.dataset.department);
        });
    });

    // تحديث البطاقات عند تحميل الصفحة
    updateCards();
});
    


  let slideIndex = 1;
  let slideInterval;

  function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
  }

  function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n;
    showSlides(slideIndex);
    startSlideShow();
  }

  function changeSlide(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    showSlides(slideIndex);
    startSlideShow();
  }

  function startSlideShow() {
    slideInterval = setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 5000);
  }

  startSlideShow();



document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
        setTimeout(function() {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.includes('index.html#')) {
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
