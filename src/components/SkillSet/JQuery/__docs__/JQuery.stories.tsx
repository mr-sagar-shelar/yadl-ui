import type { Meta, StoryObj } from "@storybook/react";
import JQuery from "../JQuery";

const meta: Meta<typeof JQuery> = { title: "SkillSet/JQuery", component: JQuery };

export default meta;
type Story = StoryObj<typeof JQuery>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
