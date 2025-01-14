import { AuroraBackgroundDemo } from "@/components/ui/aurora-background.demo";

export default function AboutPage() {
  return (
    <AuroraBackgroundDemo>
      <div className="prose prose-invert max-w-none">
        <h1>About Me</h1>
        <p>
          I am a graduate student at the University of Michigan, Ann Arbor, pursuing my studies in Computer Science. 
          My research interests lie in machine learning, particularly in the areas of attention mechanisms, 
          natural language processing, and efficient deep learning.
        </p>
        <h2>Research Interests</h2>
        <ul>
          <li>Machine Learning and Deep Learning</li>
          <li>Natural Language Processing</li>
          <li>Attention Mechanisms</li>
          <li>Efficient Model Training and Inference</li>
        </ul>
        <h2>Education</h2>
        <ul>
          <li>Master of Science in Computer Science - University of Michigan, Ann Arbor</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Python, Go, TypeScript, C++</li>
          <li>Machine Learning: PyTorch, TensorFlow, Scikit-learn</li>
          <li>Web Development: React, Next.js, Node.js</li>
          <li>Tools & Technologies: Docker, Git, AWS</li>
        </ul>
      </div>
    </AuroraBackgroundDemo>
  );
} 