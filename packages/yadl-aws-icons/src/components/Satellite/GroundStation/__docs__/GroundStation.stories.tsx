import type { Meta, StoryObj } from "@storybook/react";
import GroundStation from "../GroundStation";

const meta: Meta<typeof GroundStation> = { title: "AWS/Satellite/GroundStation", component: GroundStation };

export default meta;
type Story = StoryObj<typeof GroundStation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
