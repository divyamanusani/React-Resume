import '../../../styles/style.css';

export const Skills = () => {
    return (
        <ul class="skills">
            <li><label for="js">Java Script</label><progress id="js" value="75" class="progressbar"
                max="100"></progress></li>
            <li><label for="html">HTML</label><progress id="html" value="60" class="progressbar"
                max="100"></progress></li>
            <li><label for="css">CSS</label><progress id="css" value="50" class="progressbar" max="100"></progress>
            </li>
            <li><label for="bootstrap">Bootstrap</label><progress id="bootstrap" value="50" class="progressbar" max="100"></progress>
            </li>
            <li><label for="nodeJs">Node JS</label><progress id="nodeJs" value="60" class="progressbar"
                max="100"></progress></li>
            <li><label for="MongoDB">MongoDB</label><progress id="MongoDB" value="80" class="progressbar" max="100"></progress>
            </li>
            <li><label for="sql">SQL</label><progress id="sql" value="70" class="progressbar" max="100"></progress>
            </li>
            <li><label for="REACT">React</label><progress id="sql" value="10" class="progressbar" max="100"></progress>
            </li>
        </ul>
    );
}