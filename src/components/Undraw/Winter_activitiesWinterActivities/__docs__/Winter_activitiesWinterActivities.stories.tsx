import type { Meta, StoryObj } from "@storybook/react";
import Winter_activitiesWinterActivities from "../Winter_activitiesWinterActivities";

const meta: Meta<typeof Winter_activitiesWinterActivities> = { title: "unDraw/Winter_activitiesWinterActivities", component: Winter_activitiesWinterActivities };

export default meta;
type Story = StoryObj<typeof Winter_activitiesWinterActivities>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
