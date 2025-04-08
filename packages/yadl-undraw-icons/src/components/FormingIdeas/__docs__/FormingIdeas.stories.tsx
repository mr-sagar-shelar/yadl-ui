import type { Meta, StoryObj } from "@storybook/react";
import FormingIdeas from "../FormingIdeas";

const meta: Meta<typeof FormingIdeas> = { title: "unDraw/FormingIdeas", component: FormingIdeas };

export default meta;
type Story = StoryObj<typeof FormingIdeas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
