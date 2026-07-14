// ============================================================
// [NEW] AboutUs.jsx — About BIUS brand section
// Shown when "About Us" is clicked in the navbar.
// ============================================================
import './AboutUs.css';

function AboutUs() {
    return (
        <section className="about-section" id="about-us">
            <div className="about-inner container">

                {/* Decorative accent line */}
                <span className="about-accent">— Our Story —</span>

                <h2 className="about-heading">About BIUS</h2>

                <p className="about-text">
                    BIUS is a modern fashion label that blends heritage with contemporary design.
                    Created for individuals who value style, simplicity, and quality, BIUS aims
                    to redefine everyday luxury.
                </p>
                <p className="about-text">
                    Each piece in our collection is thoughtfully crafted using premium materials
                    and refined techniques — balancing the timeless with the modern, so you can
                    dress with intention, every single day.
                </p>

                {/* Three brand pillars */}
                <div className="about-pillars">
                    {[
                        { icon: '✦', title: 'Heritage', desc: 'Rooted in decades of craftsmanship tradition.' },
                        { icon: '◆', title: 'Simplicity', desc: 'Clean lines and purposeful silhouettes.' },
                        { icon: '◇', title: 'Quality', desc: 'Only the finest fabrics and materials.' },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className="about-pillar">
                            <span className="pillar-icon">{icon}</span>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default AboutUs;
