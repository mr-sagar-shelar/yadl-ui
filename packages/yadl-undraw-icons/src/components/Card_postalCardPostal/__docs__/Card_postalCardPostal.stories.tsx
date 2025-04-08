import type { Meta, StoryObj } from "@storybook/react";
import Card_postalCardPostal from "../Card_postalCardPostal";

const meta: Meta<typeof Card_postalCardPostal> = { title: "unDraw/Card_postalCardPostal", component: Card_postalCardPostal };

export default meta;
type Story = StoryObj<typeof Card_postalCardPostal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
