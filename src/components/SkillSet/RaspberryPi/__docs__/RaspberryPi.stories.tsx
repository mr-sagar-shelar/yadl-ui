import type { Meta, StoryObj } from "@storybook/react";
import RaspberryPi from "../RaspberryPi";

const meta: Meta<typeof RaspberryPi> = { title: "SkillSet/RaspberryPi", component: RaspberryPi };

export default meta;
type Story = StoryObj<typeof RaspberryPi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
