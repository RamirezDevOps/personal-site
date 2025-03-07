<style>
    /* Center the main container */
    .poetry-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        background-color: #f7f3eb; /* Soft warm background */
        min-height: 100vh;
        font-family: 'Georgia', serif;
        color: #4a3c31;
    }

    /* Styling for the poem text */
    .poem {
        max-width: 700px;
        font-size: 20px;
        line-height: 1.8;
        text-align: center;
        color: #4a3c31;
        margin-bottom: 40px; /* Space below the poem for footnotes */
    }

    /* Title styling */
    .title {
        font-size: 24px;
        color: #b4654a; /* Accent color for title */
        font-weight: bold;
        margin-bottom: 20px;
    }

    /* Footnote references in the poem text */
    .footnote-ref {
        font-size: 0.8em;
        vertical-align: super;
        cursor: pointer;
        color: #b4654a;
    }

    .footnote-ref:hover {
        text-decoration: underline;
    }

    /* Footnote section styling, centered below the poem */
    .footnotes {
        max-width: 700px;
        font-size: 16px;
        color: #8b7267; /* Softer brown for footnotes */
        border-top: 2px solid #d4a373; /* Accent border */
        padding-top: 15px;
        text-align: left; /* Left-align for standard footnote style */
        margin-top: 20px;
    }

    .footnote {
        margin-top: 10px;
    }
</style>

<div class="poetry-container">
    <main class="poem">
        <!-- Title of the Poem -->
        <div class="title">Dos mundos, una persona</div>

        <!-- First stanza -->
        <p>
            Los domingos se sienten como casa,<br>
            the taste of pupusas,<br>
            mi madre’s hands shaping masa,<br>
            all of us sitting around, talking, laughing,<br>
            en el lenguaje that holds us close.
        </p>

        <!-- Stanza break -->
        <p style="margin-top: 1.5em;"></p>

        <!-- Second stanza -->
        <p>
            Here, I try to make them,<br>
            pero el sabor se me escapa,<br>
            The taste isn’t quite right,<br>
            and it feels a little empty,<br>
            without her voice, without our Spanish.<br>
        </p>

        <!-- Stanza break -->
        <p style="margin-top: 1.5em;"></p>

        <!-- Third stanza-->
        <p>
            When I call home,<br>
            it’s like a weight comes off.<br>
            “No hay que aflojarse,” my dad tells me<br>
            sus manos, gastadas por una pala,<br>
            his dreams planted en mí.<br>
        </p>

        <!-- Stanza break -->
        <p style="margin-top: 1.5em;"></p>

        <!-- Fourth stanza-->
        <p>
            Back home, they call me “el que fue a la universidad,”<br>
            I’m the one who went to university,<br>
            walking in dos mundos, balancing<br>
            what they cannot see.<br>
            Algunos preguntan si mi familia entiende.<br>
        </p>

        <!-- Stanza break -->
        <p style="margin-top: 1.5em;"></p>

        <!-- Fifth stanza-->
        <p>
            They don’t know the pride in my dad’s voice<br>
            when he says I’m becoming educado,<br>
            or mi madre’s tears at graduation,<br>
            su alegría callada, porque esta victoria<br>
            is for all of us.<br>
        </p>
        
        <!-- Stanza break -->
        <p style="margin-top: 1.5em;"></p>

        <!-- Sixth stanza-->
        <p>
            “Language, I do not speak. I scream,”<sup class="footnote-ref"><a href="#footnote1" style="text-decoration: none;">1</a></sup><br>
            and in that scream, I find my voz,<br>
            in both inglés and español,<br>
            the words mi abuelita gave me,<br>
            “Siempre con humildad,” always<br>
            inside me, showing me the way.
        </p>

        <!-- Stanza break -->
        <p style="margin-top: 1.5em;"></p>

        <!-- Seventh stanza-->
        <p>
            I am both y ninguno,<br>
            Salvadoreño y estudiante, learning<br>
            to belong in every space,<br>
            with mis raíces held,<br>
            as others ask, “But what’s the language you dream in?”<br>
            “I feel bad for those who feel confused when I tell them that I do not have a mother tongue,”<sup class="footnote-ref"><a href="#footnote1" style="text-decoration: none;">2</a></sup><br>
            because home is more than just words.
        </p>
    </main>

    <!-- Footnotes section, centered at the bottom of the entire poem -->
    <section class="footnotes">
        <div class="footnote" id="footnote1">
            <sup>1</sup> Alan Peláez Lopez, "Language, I do not speak. I scream."<br>
            <sup>2</sup> Mirene Arsanios, "Autobiography of a Language."
        </div>
    </section>
</div>
