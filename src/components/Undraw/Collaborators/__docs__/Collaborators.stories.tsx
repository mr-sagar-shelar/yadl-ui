import type { Meta, StoryObj } from "@storybook/react";
import Collaborators from "../Collaborators";

const meta: Meta<typeof Collaborators> = { title: "unDraw/Collaborators", component: Collaborators };

export default meta;
type Story = StoryObj<typeof Collaborators>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
