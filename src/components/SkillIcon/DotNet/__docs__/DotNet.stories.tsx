import type { Meta, StoryObj } from "@storybook/react";
import DotNet from "../DotNet";

const meta: Meta<typeof DotNet> = { title: "SkillIcon/DotNet", component: DotNet };

export default meta;
type Story = StoryObj<typeof DotNet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
