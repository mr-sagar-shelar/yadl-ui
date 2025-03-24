import type { Meta, StoryObj } from "@storybook/react";
import Scala from "../Scala";

const meta: Meta<typeof Scala> = { title: "SkillSet/Scala", component: Scala };

export default meta;
type Story = StoryObj<typeof Scala>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
