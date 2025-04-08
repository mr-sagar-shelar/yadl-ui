import type { Meta, StoryObj } from "@storybook/react";
import Conceptual_ideaConceptualIdea from "../Conceptual_ideaConceptualIdea";

const meta: Meta<typeof Conceptual_ideaConceptualIdea> = { title: "unDraw/Conceptual_ideaConceptualIdea", component: Conceptual_ideaConceptualIdea };

export default meta;
type Story = StoryObj<typeof Conceptual_ideaConceptualIdea>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
