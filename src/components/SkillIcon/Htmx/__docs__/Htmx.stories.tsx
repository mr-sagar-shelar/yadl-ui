import type { Meta, StoryObj } from "@storybook/react";
import Htmx from "../Htmx";

const meta: Meta<typeof Htmx> = { title: "SkillIcon/Htmx", component: Htmx };

export default meta;
type Story = StoryObj<typeof Htmx>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
