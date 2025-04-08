import type { Meta, StoryObj } from "@storybook/react";
import DetailedInformation from "../DetailedInformation";

const meta: Meta<typeof DetailedInformation> = { title: "unDraw/DetailedInformation", component: DetailedInformation };

export default meta;
type Story = StoryObj<typeof DetailedInformation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
